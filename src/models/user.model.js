const mongoose = require('mongoose');
const { ROLES } = require('../utils/const');

const UserModel = mongoose.model('User', {
  name: String,
  email: String,
  role: {
    type: String,
    enum: Object.keys(ROLES).map(roleKey => ROLES[roleKey]),
  },
});

module.exports = UserModel;
