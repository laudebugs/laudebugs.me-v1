const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const Feed = require('feed').Feed

function getFilesFromDir(dir, includeSource) {
  const postsDirectory = path.join(process.cwd(), `posts/${dir}`)
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map(filename => {
    const fullPath = path.join(process.cwd(), `posts/${dir}/`, filename)
    const post = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(post)
    data.image = getImageForPost(data.slug)
    data.date = new Date(data.publishedOn)
    if (includeSource) data.content = content
    return data
  })
}

function getImageForPost(slug) {
  const imagesPath = 'apps/lbugasu.github.io/public/post-images/'
  const images = fs.readdirSync(imagesPath)
  const image = images.find(_image => _image.includes(slug))
  return image ?? ''
}

function createFeed(posts) {
  const feed = new Feed({
    title: "Lau de Bugs' Blog",
    description: 'Life and Software Development Blog',
    id: 'https://www.laudebugs.me/',
    link: 'https://www.laudebugs.me/api/rss',
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'https://www.laudebugs.me/images/logos/logo_light.png',
    favicon: 'https://www.laudebugs.me/favicon.ico',
    copyright: 'All rights reserved 2021, Lau de Bugs',
    updated: new Date(), // optional, default = today
    generator: 'awesome', // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: 'https://www.laudebugs.me/api/rss/json',
      atom: 'https://www.laudebugs.me/api/rss/atom'
    },
    author: {
      name: 'Laurence B. Ininda',
      email: 'lbugasu@gmail.com',
      link: 'https://www.laudebugs.me/'
    }
  })

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: `https://www.laudebugs.me/${post.type}/${post.slug}`,
      description: post.summary,
      content: post.content,
      author: [
        {
          name: 'Laurence B. Ininda',
          email: 'lbugasu@gmail.com',
          link: 'https://www.laudebugs.me/'
        }
      ],
      contributor: [
        {
          name: 'Laurence B. Ininda',
          email: 'lbugasu@gmail.com',
          link: 'https://www.laudebugs.me/'
        }
      ],
      date: new Date(post.publishedOn),
      image: `https://www.laudebugs.me/post-images/${post.image}`
    })
  })

  feed.addCategory('Technology')

  return feed
}

module.exports = { getFilesFromDir, getImageForPost, createFeed }
