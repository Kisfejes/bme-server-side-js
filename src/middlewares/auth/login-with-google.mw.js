const { AuthService, UserService } = require('../../services');

const { ROLES } = require('../../utils/const');

// Redirects to google, and handle response
const loginWithGoogle = async (req, res) => {
  const { role } = req.query;
  let user;
  if (role === 'admin') {
    user = {
      name: 'Admin Aladar',
      email: 'admin.aladar@example.com',
      role: ROLES.ADMIN,
    };
  } else {
    user = {
      name: 'Musician Miki',
      email: 'musician.miki@example.com',
      role: ROLES.MUSICIAN,
    };
  }

  // check if the user already exists
  const checkUserWithEmail = await UserService.getUserByEmail(user.email);

  if (checkUserWithEmail) {
    // give session then redirect
    AuthService.setCurrentUser(req.session, checkUserWithEmail);
    return res.redirect('/sessions');
  }

  const createdUser = await UserService.createUser(user);
  AuthService.setCurrentUser(req.session, createdUser);
  res.redirect('/sessions');
};

module.exports = loginWithGoogle;
