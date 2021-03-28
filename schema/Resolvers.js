const { dummyPosts } = require("../utils/data");
const { getAllUsers } = require("../src/controllers/user");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
exports.resolvers = {
  Query: {
    getAllPosts: () => dummyPosts,
    // getAllUsers: () => getAllUsers(),
  },
  Mutation: {
    createPost: (parent, args) => {
      const newPost = {
        ...args,
        user: {
          fullName: args.fullName,
        },
      };
      dummyPosts.push(newPost);

      console.log(newPost);
      return newPost;
    },
  },
};
