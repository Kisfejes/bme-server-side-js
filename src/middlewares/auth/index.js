const authCheck = require('./auth-check.mw');
const roleCheck = require('./role-check.mw');
const loginWithGoogle = require('./login-with-google.mw');
const logout = require('./logout.mw');

module.exports = {
  authCheck,
  roleCheck,
  loginWithGoogle,
  logout,
};
