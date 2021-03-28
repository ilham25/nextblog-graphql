const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

exports.typeDefs = gql`
  type User {
    id: Int
    fullName: String
    email: String
    password: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    content: String
    userPost: User
  }

  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
  }

  type Mutation {
    addUser(fullName: String, email: String, password: String): User
    addPost(title: String, content: String, userId: Int): Post
  }
`;
