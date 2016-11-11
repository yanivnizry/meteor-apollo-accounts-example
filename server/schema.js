import { SchemaMutations, SchemaTypes } from 'meteor/nicolaslopezj:apollo-accounts'
import mutations from './mutations'

const schema = `
${SchemaTypes}
type Mutation {
  ${mutations}
  updateProfile(
    firstname: String
    lastname: String
  ): SuccessResponse
}
type Post {
  _id: ID
  title: String
}
type User {
  _id: ID
  emails: [Email]
  profile: UserProfile
}
type Email {
  address: String
  verified: Boolean
}
type UserProfile {
  firstname: String
  lastname: String
}
type Query {
  me: User
  posts: [Post]
}
schema {
  query: Query
  mutation: Mutation
}
`
export default [schema];
