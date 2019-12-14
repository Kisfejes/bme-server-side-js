const { SessionService } = require('../../services');

// List sessions
const sessionList = async (req, res, next) => {
  const sessions = await SessionService.getSessions();

  res.locals.sessions = sessions;
  next();
};

module.exports = sessionList;
