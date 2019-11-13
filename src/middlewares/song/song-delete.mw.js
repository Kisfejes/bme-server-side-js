// Check request body, and delete song
const songDelete = (req, res, next) => {
  next();
  res.redirect('/songs');
};

module.exports = songDelete;
