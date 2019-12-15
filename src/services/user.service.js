const UserModel = require('../models/user.model');

class UserService {
  static async getUser(userid) {
    try {
      const user = await UserModel.findById(userid);
      if (!user) {
        throw new Error(`User not found with id: "${user}"`);
      }

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await UserModel.findOne({
        email,
      });
      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async createUser({ name, email, role }) {
    const user = await UserModel.create({
      name,
      email,
      role,
    });
    return user;
  }
}

module.exports = UserService;
