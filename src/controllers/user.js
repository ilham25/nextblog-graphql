const { User, Post } = require("../../models");

exports.getAllUsers = async (req) => {
  const rawUsers = await User.findAll({
    include: [{ model: Post, as: "posts" }],
  });
  return rawUsers;
};

exports.addUser = async (req) => {
  const rawUsers = await User.create({
    ...req,
  });
  return rawUsers;
};
