const { SessionService } = require('../../services');

// Get session based on session-id
const sessionGet = (req, res, next) => {
  const sessionid = parseInt(req.params.sessionid, 10);

  const currentSession = SessionService.getSession(sessionid);
  res.locals.session = currentSession;
  next();
};

module.exports = sessionGet;
