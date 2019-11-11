const { SessionService } = require('../../services');

// List sessions
const sessionList = (req, res, next) => {
  const sessions = SessionService.getSessions();

  res.locals.sessions = sessions;
  next();
};

module.exports = sessionList;
