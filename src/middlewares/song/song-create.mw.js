const { SongService } = require('../../services');

// Check request body, and create song
const songCreate = async (req, res, next) => {
  const { title, artist, youtube } = req.body;

  try {
    await SongService.createSong({
      title,
      artist,
      youtube,
    });

    res.redirect('/songs');
  } catch (error) {
    console.log(error);

    res.locals.error = error.message;
    res.locals.song = {
      title,
      artist,
      youtube,
    };
    next();
  }
};

module.exports = songCreate;
