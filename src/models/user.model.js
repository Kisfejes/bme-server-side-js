const mongoose = require('mongoose');

const UserModel = mongoose.model('User', {
  name: String,
  artist: String,
  youtubeLink: String,
});

module.exports = UserModel;
