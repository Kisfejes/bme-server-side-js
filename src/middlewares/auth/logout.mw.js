const { AuthService } = require('../../services');

// Clear user's session, and redirects to login page
const logout = (req, res) => {
  AuthService.clearCurrentUser(req.session);
  res.redirect('/login');
};

module.exports = logout;
