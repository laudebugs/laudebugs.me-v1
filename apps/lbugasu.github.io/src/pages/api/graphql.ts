import { ApolloServer } from 'apollo-server-micro'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { GreetingResolver } from '../../graphql/resolvers'

const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [GreetingResolver],
    emitSchemaFile: true
  })
  return new ApolloServer({ schema })
}

const server = await createServer()
await server.start()
export default server.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false
  }
}
