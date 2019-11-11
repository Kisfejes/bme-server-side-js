// Checking Authentication
// IF no_auth -> redirect to login
// ELSE next()
const { AuthService } = require('../../services');

// eslint-disable-next-line consistent-return
const authCheck = (req, res, next) => {
  const currentUser = AuthService.getCurrentUser(req.session);

  if (!currentUser) {
    return res.redirect('/login');
  }

  res.locals.currentUser = currentUser;
  res.locals.currentPath = req.url;

  // redirect to default page if '/' given
  if (req.originalUrl === '/') {
    return res.redirect('/sessions');
  }

  next();
};

module.exports = authCheck;
