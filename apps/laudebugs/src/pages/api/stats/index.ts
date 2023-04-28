import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import axios from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get(async (request, response) => {
  const { data } = await getRepoStats()
  response.json({ gh: data })
})

export default handler

const oauth = { Authorization: 'bearer ' + process.env.GH_TOKEN }

const githubUrl = 'https://api.github.com/graphql'

const statsQuery = `query {
  repository(name:"laudebugs.me", owner: "laudebugs"){
    description
    homepageUrl
    forkCount
    openGraphImageUrl
    updatedAt
    deployments(last:1){
      totalCount
      nodes{
        commit{
          id
        }
        environment
        description
        createdAt
        latestStatus{
          state
        }
      }
    }
    languages (first:10) {
      totalCount
      totalSize
      edges{
        size
        node{
          name
          color
        }
      }
    }
    issues(last:20){
      nodes{
        closed
        labels(last:10){
          nodes{
            color
            name
          }
        }
        state
        title
        body
      }
    }
  }
}`
const getRepoStats = () => {
  return axios.post(githubUrl, { query: statsQuery }, { headers: oauth })
}
