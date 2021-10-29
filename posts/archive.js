const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const devPostData = getFilesFromDir('dev')
const journalPostData = getFilesFromDir('journal')

const combinedData = [...devPostData, ...journalPostData]

combinedData.sort((a, b) => b.date - a.date).reverse()

combinedData.map((post, index) => {
  post.no = index + 1
  return post
})

combinedData.sort((a, b) => b.no - a.no)

fs.writeFile(
  './posts/archive.json',
  JSON.stringify(combinedData, null, 4),
  'utf8',
  err => {
    if (err) {
      console.log('Error updating archive❌: ', err.message)
    } else {
      console.log('Successfully Updated archive✅')
    }
  },
  4
)

function getFilesFromDir(dir) {
  const postsDirectory = path.join(process.cwd(), `posts/${dir}`)
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map(filename => {
    const fullPath = path.join(process.cwd(), `posts/${dir}/`, filename)
    const post = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(post)
    data.image = getImageForPost(data.slug)
    data.date = new Date(data.publishedOn)
    return data
  })
}

function getImageForPost(slug) {
  const imagesPath = 'apps/lbugasu.github.io/public/post-images/'
  const images = fs.readdirSync(imagesPath)
  const image = images.find(_image => _image.includes(slug))
  return image ?? ''
}
