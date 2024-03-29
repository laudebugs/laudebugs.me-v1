import { IMAGE_BASE_URL } from '@laudebugs/common/constants'
import { compareAsc, parseISO } from 'date-fns'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
function dayCount(_date: string): string {
  const date = new Date(_date)
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = Number(date) - Number(start) + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  const oneDay = 1000 * 60 * 60 * 24
  return `${Math.floor(diff / oneDay)}.${date.getFullYear()}`
}

export interface ITag {
  title: string
  articleCount: number
}

const rootPath = ''

export function getFilesFromSrcDir(directory: string, includeContent = false) {
  const postsDirectory = path.join(process.cwd(), `${rootPath + directory}`)
  const filenames = readdirSync(postsDirectory)
  return filenames
    .filter(filename => /^(?!_).+.mdx/gm.test(filename))
    .map(filename => {
      const fullPath = path.join(process.cwd(), `${rootPath + directory}`, filename)
      const post = readFileSync(fullPath, 'utf-8')
      const { content, data } = matter(post)
      data.image = getImageForPost(data.slug)
      if (includeContent) {
        return {
          content,
          frontMatter: data
        }
      }
      return data
    })
    .sort((a, b) => {
      if (includeContent) {
        return compareAsc(parseISO(a.frontMatter.publishedOn), parseISO(b.frontMatter.publishedOn))
      }
      return compareAsc(parseISO(a.publishedOn), parseISO(b.publishedOn))
    })
    .reverse()
}

export function getChangeLog() {
  const fullPath = path.join(process.cwd(), `CHANGELOG.md`)
  return readFileSync(fullPath, 'utf-8')
}

export function getFileFromDir(directory: string, filename: string) {
  const fullPath = path.join(process.cwd(), `${rootPath + directory}/${filename}`)
  return readFileSync(fullPath, 'utf-8')
}

export function getSinglePostFromSrcDir(directory: string, filename: string) {
  const fullPath = path.join(process.cwd(), `${rootPath + directory}/${filename}.mdx`)
  const lastModified = JSON.parse(readFileSync('posts/out/archive.json', 'utf-8')).find((post: any) => post.slug === filename)?.lastModified

  return { post: readFileSync(fullPath, 'utf-8'), lastModified }
}

export function getStatsForPosts(posts) {
  const dates = []
  let tags: ITag[] = []
  posts.map(post => {
    dates.push(new Date(post.publishedOn))
    if (post.tags) {
      post.tags.forEach((postTag: string) => {
        const tagIndex = tags.findIndex(tag => tag.title === postTag)
        if (tagIndex < 0) {
          tags.push({ title: postTag, articleCount: 1 })
        } else {
          tags[tagIndex] = { ...tags[tagIndex], articleCount: tags[tagIndex].articleCount + 1 }
        }
      })
    }
  })

  tags = tags.sort((a, b) => b.articleCount - a.articleCount)

  const startDate = dayCount(new Date(Math.min(...dates)).toString())
  const endDate = dayCount(new Date(Math.max(...dates)).toString())
  const count = posts.length
  return { startDate, endDate, tags, count }
}

export function getImageForPost(slug) {
  const imagesPath = 'posts/assets/'
  const images = readdirSync(imagesPath)
  const image = images.find(_image => _image.includes(slug))
  return IMAGE_BASE_URL + image ?? ''
}
