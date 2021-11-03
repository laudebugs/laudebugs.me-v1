const fs = require('fs')

const { createFeed, getFilesFromDir } = require('./helpers/helpers')

const devPostData = getFilesFromDir('dev', true)
const journalPostData = getFilesFromDir('journal', true)

const combinedData = [...devPostData, ...journalPostData]

combinedData.sort((a, b) => b.date - a.date).reverse()

combinedData.map((post, index) => {
  post.no = index + 1
  return post
})

combinedData.sort((a, b) => b.no - a.no)

const feed = createFeed(combinedData)
console.log(feed.json1())
const feedStore = {
  rss: feed.rss2(),
  json: JSON.stringify(feed.json1(), undefined, 4),
  atom: feed.atom1()
}

fs.writeFile(
  './posts/feed.json',
  JSON.stringify(feedStore, null, 4),
  'utf8',
  err => {
    if (err) {
      console.log('Error updating Rss Feeds: ', err.message)
    } else {
      console.log('Successfully Updated Rss Feeds')
    }
  },
  4
)
