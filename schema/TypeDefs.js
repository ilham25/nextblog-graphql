const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

exports.typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Posts {
    title: String
    content: String
    user: User
  }

  type User {
    fullName: String
  }

  # Query
  type Query {
    getAllPosts: [Posts!]!
  }

  # Mutation
  type Mutation {
    createPost(title: String, content: String, fullName: String): Posts
  }
`;
