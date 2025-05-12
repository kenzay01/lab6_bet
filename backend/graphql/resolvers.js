const Post = require("../models/Post");

const resolvers = {
  Query: {
    posts: async () => {
      try {
        return await Post.find();
      } catch (error) {
        throw new Error("Помилка при отриманні постів");
      }
    },
    post: async (_, { id }) => {
      try {
        return await Post.findById(id);
      } catch (error) {
        throw new Error("Пост не знайдено");
      }
    },
  },
  Mutation: {
    createPost: async (_, { input }) => {
      try {
        const post = new Post(input);
        return await post.save();
      } catch (error) {
        throw new Error("Помилка при створенні посту");
      }
    },
    updatePost: async (_, { id, input }) => {
      try {
        return await Post.findByIdAndUpdate(id, { $set: input }, { new: true });
      } catch (error) {
        throw new Error("Помилка при оновленні посту");
      }
    },
    deletePost: async (_, { id }) => {
      try {
        return await Post.findByIdAndDelete(id);
      } catch (error) {
        throw new Error("Помилка при видаленні посту");
      }
    },
  },
};

module.exports = resolvers;
