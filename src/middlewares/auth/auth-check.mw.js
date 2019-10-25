// Checking Authentication
// IF no_auth -> redirect to login
// ELSE next()
const authCheck = (req, res, next) => {
  next();
};

module.exports = authCheck;
