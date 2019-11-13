const { SessionService } = require('../../services');

// Check request body, and delete session
const sessionDelete = (req, res) => {
  const sessionid = parseInt(req.params.sessionid, 10);
  SessionService.deleteSession(sessionid);

  res.redirect('/sessions');
};

module.exports = sessionDelete;
