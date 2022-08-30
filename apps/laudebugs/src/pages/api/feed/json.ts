import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import feed from '../../../../../../posts/out/feed.json'
import devFeed from '../../../../../../posts/out/dev.json'
import journalFeed from '../../../../../../posts/out/journal.json'
import fragmentsFeed from '../../../../../../posts/out/fragments.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  response.setHeader('Content-Type', 'application/json')
  if (request.query?.section === 'dev') {
    response.send(devFeed.json)
  } else if (request.query?.section === 'journal') {
    response.send(journalFeed.json)
  } else if (request.query?.section === 'fragments') {
    response.send(fragmentsFeed.json)
  } else response.send(feed.json)
})

export default handler