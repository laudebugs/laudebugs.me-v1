import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Greeting {
  @Field(type => String)
  message: string
  constructor(message: string) {
    this.message = message
  }
}
