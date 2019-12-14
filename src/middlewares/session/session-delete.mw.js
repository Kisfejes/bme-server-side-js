const { SessionService } = require('../../services');

// Check request body, and delete session
const sessionDelete = (req, res) => {
  const { sessionid } = req.params;
  SessionService.deleteSession(sessionid);

  res.redirect('/sessions');
};

module.exports = sessionDelete;
