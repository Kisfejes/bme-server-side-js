// Checking User's role
// IF requiredRoles is present next()
// IF requiredRoles is not present redirect to LOGIN_PAGE
// IF path = '/' && requiredRoles is present redirect to MAIN_PAGE
const roleCheck = (req, res, next) => {
  next();
};

module.exports = roleCheck;
