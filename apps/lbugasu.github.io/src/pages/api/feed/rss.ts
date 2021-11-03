import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import feed from '../../../../../../posts/feed.json'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((request, response) => {
  response.send(feed.rss)
})

export default handler
