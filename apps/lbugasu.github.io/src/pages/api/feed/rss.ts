import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import devFeed from '../../../../../../posts/out/dev.json'
import feed from '../../../../../../posts/out/feed.json'
import journalFeed from '../../../../../../posts/out/journal.json'
import fragmentsFeed from '../../../../../../posts/out/fragments.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  if (request.query?.section === 'dev') {
    response.send(devFeed.rss)
  } else if (request.query?.section === 'journal') {
    response.send(journalFeed.rss)
  } else if (request.query?.section === 'fragments') {
    response.send(fragmentsFeed.rss)
  } else response.send(feed.rss)
})

export default handler
