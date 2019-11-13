// Check request body, and delete song
const songDelete = (req, res) => {
  res.redirect('/songs');
};

module.exports = songDelete;
