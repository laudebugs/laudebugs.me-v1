import { ApolloServer } from 'apollo-server-micro'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { GreetingResolver } from '../../graphql/resolvers'

export const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [GreetingResolver],
    emitSchemaFile: true
  })
  const server = new ApolloServer({ schema })
   server.start()
   server.createHandler({ path: '/api/graphql' })
}

export const config = {
  api: {
    bodyParser: false
  }
}
