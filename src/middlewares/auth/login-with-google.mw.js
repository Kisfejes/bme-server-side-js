const { AuthService } = require('../../services');

// Redirects to google, and handle response
const loginWithGoogle = (req, res) => {
  const { role } = req.query;
  let user;
  if (role === 'admin') {
    user = {
      name: 'Admin Aladar',
      role: 'admin',
    };
  } else {
    user = {
      name: 'Musician Miki',
      role: 'musician',
    };
  }

  // give session then redirect
  AuthService.setCurrentUser(req.session, user);

  res.redirect('/sessions');
};

module.exports = loginWithGoogle;
