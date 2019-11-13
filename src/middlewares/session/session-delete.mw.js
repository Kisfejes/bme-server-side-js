// Check request body, and delete session
const sessionDelete = (req, res, next) => {
  next();
  res.redirect('/sessions');
};

module.exports = sessionDelete;
