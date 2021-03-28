const { User, Post } = require("../../models");

exports.getAllPosts = async (req) => {
  const rawPosts = await Post.findAll({
    include: [
      {
        model: User,
        as: "userPost",
      },
    ],
  });
  return rawPosts;
};

exports.addPost = async (req) => {
  const rawPost = await Post.create({
    ...req,
  });
  return rawPost;
};
