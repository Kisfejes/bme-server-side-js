const { SessionService } = require('../../services');

// Add song for session
const sessionRemoveParticipant = async (req, res) => {
  const { sessionid, userid } = req.query;

  await SessionService.removeParticipant(sessionid, userid);
  res.redirect(`/sessions/${sessionid}`);
};

module.exports = sessionRemoveParticipant;
