const mongoose = require('mongoose');

const SessionModel = mongoose.model('Session', {
  name: String,
  date: Date,
  location: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
});

module.exports = SessionModel;
