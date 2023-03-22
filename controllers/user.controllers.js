// create controllers using prisma client
const prisma = require("../config/prisma.config");

module.exports = {
  // get all users
  getUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  },

  // get user by CI
  getUser: async (req, res) => {
    try {
      const {ci} = req.params;
      const user = await prisma.user.findUnique({
        where: {
          ci: parseInt(ci),
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  },

  // create user
  createUser: async (req, res) => {
    try {
      const {ci, firstName, lastName, age} = req.body;
      const user = await prisma.user.create({
        data: {
          ci: parseInt(ci),
          firstName,
          lastName,
          age: parseInt(age),
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  },

  // update user
  updateUser: async (req, res) => {
    try {
      const {ci} = req.params;
      const {firstName, lastName, age} = req.body;
      const user = await prisma.user.update({
        where: {
          ci: parseInt(ci),
        },
        data: {
          firstName,
          lastName,
          age: parseInt(age),
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  },

  // delete user
  deleteUser: async (req, res) => {
    try {
      const {ci} = req.params;
      const user = await prisma.user.delete({
        where: {
          ci: parseInt(ci),
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  },
};
