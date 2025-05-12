const typeDefs = `
  type Post {
    _id: ID!
    title: String!
    text: String
    author: String
    createdAt: String
    updatedAt: String
  }

  input PostInput {
    title: String!
    text: String
    author: String
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Post
  }
`;

module.exports = typeDefs;
