const { SessionService } = require('../../services');

// Remove song for session
const sessionRemoveSong = async (req, res) => {
  const { sessionid, songid } = req.query;

  await SessionService.removeSong(sessionid, songid);
  res.redirect(`/sessions/${sessionid}`);
};

module.exports = sessionRemoveSong;
