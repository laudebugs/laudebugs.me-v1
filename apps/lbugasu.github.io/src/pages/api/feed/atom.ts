import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import devFeed from '../../../../../../posts/out/dev.json'
import feed from '../../../../../../posts/out/feed.json'
import journalFeed from '../../../../../../posts/out/journal.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  if (request.query?.section === 'dev') {
    response.send(devFeed.atom)
  } else if (request.query?.section === 'journal') {
    response.send(journalFeed.atom)
  } else {
    response.send(feed.atom)
  }
})

export default handler
