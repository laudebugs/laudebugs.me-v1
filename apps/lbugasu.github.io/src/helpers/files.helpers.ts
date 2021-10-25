import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import uniq from 'lodash/uniq'
import { dayCount } from './posts.helpers'

const rootPath = 'apps/lbugasu.github.io/src/'

export function getFilesFromSrcDir(directory: string) {
  const postsDirectory = path.join(process.cwd(), `${rootPath + directory}`)
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map(filename => {
    const fullPath = path.join(process.cwd(), `${rootPath + directory}`, filename)
    const post = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(post)
    data.image = getImageForPost(data.slug)
    return data
  })
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
    tags.push(...post.tags)
  })

  tags = uniq(tags)

  const startDate = dayCount(new Date(Math.min(...dates)).toString())
  const endDate = dayCount(new Date(Math.max(...dates)).toString())
  const count = posts.length
  return { startDate, endDate, tags, count }
}

export function getImageForPost(slug) {
  const imagesPath = 'apps/lbugasu.github.io/public/posts.images/'
  const images = fs.readdirSync(imagesPath)
  const image = images.find(_image => _image.includes(slug))
  return image ?? ''
}
