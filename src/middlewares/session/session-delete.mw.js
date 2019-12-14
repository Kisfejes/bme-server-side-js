const { SessionService } = require('../../services');

// Check request body, and delete session
const sessionDelete = async (req, res) => {
  const { sessionid } = req.params;
  await SessionService.deleteSession(sessionid);

  res.redirect('/sessions');
};

module.exports = sessionDelete;
