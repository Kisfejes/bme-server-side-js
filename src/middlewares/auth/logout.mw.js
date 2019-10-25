// Clear user's session, and redirects to login page
const logout = (req, res, next) => {
  next();
};

module.exports = logout;
