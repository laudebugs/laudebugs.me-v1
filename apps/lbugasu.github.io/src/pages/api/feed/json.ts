import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import feed from '../../../../../../posts/feed.json'
import devFeed from '../../../../../../posts/dev.json'
import journalFeed from '../../../../../../posts/journal.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  response.setHeader('Content-Type', 'application/json')
  if (request.query?.section === 'dev') {
    response.send(devFeed.json)
  } else if (request.query?.section === 'journal') {
    response.send(journalFeed.json)
  } else response.send(feed.json)
})

export default handler
