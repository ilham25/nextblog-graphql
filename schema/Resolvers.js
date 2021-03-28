const { dummyPosts } = require("../utils/data");
const { getAllUsers, addUser } = require("../src/controllers/user");
const {
  getAllPosts,
  addPost,
  getPostById,
  deletePost,
  updatePost,
} = require("../src/controllers/post");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
exports.resolvers = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getAllPosts: () => getAllPosts(),
  },
  Mutation: {
    addUser: (parent, args) => {
      return addUser(args);
    },
    addPost: (parent, args) => {
      return addPost(args);
    },
    getPostById: (parent, args) => {
      return getPostById(args);
    },
    deletePost: (parent, args) => {
      return deletePost(args);
    },
    updatePost: (parent, args) => {
      return updatePost({
        params: { id: args.id },
        body: { title: args.title, content: args.content },
      });
    },
  },
};
