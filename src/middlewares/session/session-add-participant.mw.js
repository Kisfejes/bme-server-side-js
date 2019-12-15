const { SessionService } = require('../../services');

// Add song for session
const sessionAddParticipant = async (req, res) => {
  const { sessionid, userid } = req.query;

  await SessionService.addParticipant(sessionid, userid);
  res.redirect(`/sessions/${sessionid}`);
};

module.exports = sessionAddParticipant;
