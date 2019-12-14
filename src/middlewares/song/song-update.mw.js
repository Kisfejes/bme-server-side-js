const { SongService } = require('../../services');

// Update song
const songUpdate = async (req, res, next) => {
  const { songid } = req.params;
  const { title, artist, youtube } = req.body;

  try {
    await SongService.updateSong({
      songid,
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

module.exports = songUpdate;
