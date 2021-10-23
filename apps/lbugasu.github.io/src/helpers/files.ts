import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export function getFilesFromSrcDir(directory: string) {
  const postsDirectory = path.join(process.cwd(), `apps/lbugasu.github.io/src/${directory}`)
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map(filename => {
    const fullPath = path.join(process.cwd(), `apps/lbugasu.github.io/src/${directory}`, filename)
    const post = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(post)
    return data
  })
}

export function getSinglePostFromSrcDir(directory: string, filename: string) {
  const fullPath = path.join(process.cwd(), `apps/lbugasu.github.io/src/${directory}/${filename}.mdx`)
  const post = fs.readFileSync(fullPath, 'utf-8')
  const { data } = matter(post)
  return data
}
