import fs from 'fs'
import matter from 'gray-matter'
import uniq from 'lodash/uniq'
import path from 'path'
import { dayCount } from './posts.helpers'
import { compareAsc, parseISO } from 'date-fns'
import { IMAGE_BASE_URL } from '../constants'
const rootPath = ''

export function getFilesFromSrcDir(directory: string, includeContent = false) {
  const postsDirectory = path.join(process.cwd(), `${rootPath + directory}`)
  const filenames = fs.readdirSync(postsDirectory)
  return filenames
    .map(filename => {
      const fullPath = path.join(process.cwd(), `${rootPath + directory}`, filename)
      const post = fs.readFileSync(fullPath, 'utf-8')
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
  return fs.readFileSync(fullPath, 'utf-8')
}

export function getSinglePostFromSrcDir(directory: string, filename: string) {
  const fullPath = path.join(process.cwd(), `${rootPath + directory}/${filename}.mdx`)
  return fs.readFileSync(fullPath, 'utf-8')
}

export function getStatsForPosts(posts) {
  const dates = []
  let tags = []
  posts.map(post => {
    dates.push(new Date(post.publishedOn))
    if (post.tags) tags.push(...post.tags)
  })

  tags = uniq(tags).filter(tag => tag !== '')

  const startDate = dayCount(new Date(Math.min(...dates)).toString())
  const endDate = dayCount(new Date(Math.max(...dates)).toString())
  const count = posts.length
  return { startDate, endDate, tags, count }
}

export function getImageForPost(slug) {
  const imagesPath = 'posts/assets/'
  const images = fs.readdirSync(imagesPath)
  const image = images.find(_image => _image.includes(slug))
  return IMAGE_BASE_URL + image ?? ''
}
