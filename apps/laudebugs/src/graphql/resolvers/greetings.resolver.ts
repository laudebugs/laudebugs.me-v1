import { Query, Resolver } from 'type-graphql'
import { Greeting } from '../../models'

@Resolver(of => Greeting)
export class GreetingResolver {
  @Query(returns => [Greeting])
  hello() {
    return new Greeting('Hello World')
  }
}
