const { User, Post } = require("../../models");

exports.getAllPosts = async (req) => {
  const rawPosts = await Post.findAll({
    include: [
      {
        model: User,
        as: "userPost",
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  return rawPosts;
};
exports.getPostById = async (req) => {
  const rawPosts = await Post.findOne({
    include: [
      {
        model: User,
        as: "userPost",
      },
    ],
    where: {
      id: req.id,
    },
  });
  return rawPosts;
};
exports.addPost = async (req) => {
  const rawPost = await Post.create({
    ...req,
  });
  return rawPost;
};
exports.deletePost = async (req) => {
  const rawPost = await Post.destroy({
    where: {
      id: req.id,
    },
  });
  return req.id;
};

exports.updatePost = async (req) => {
  const editPost = await Post.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  const rawPost = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });

  return rawPost;
};
