import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import devFeed from '../../../../../../posts/dev.json'
import feed from '../../../../../../posts/feed.json'
import journalFeed from '../../../../../../posts/journal.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  if (request.query?.section === 'dev') {
    response.send(devFeed.rss)
  } else if (request.query?.section === 'journal') {
    response.send(journalFeed.rss)
  } else response.send(feed.rss)
})

export default handler
