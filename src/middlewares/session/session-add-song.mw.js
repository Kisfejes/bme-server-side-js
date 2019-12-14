const { SessionService } = require('../../services');

// Add song for session
const sessionAddSong = async (req, res) => {
  const { sessionid, songid } = req.query;

  await SessionService.addSong(sessionid, songid);
  res.redirect(`/sessions/${sessionid}`);
};

module.exports = sessionAddSong;
