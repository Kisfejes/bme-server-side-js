const { SessionService, SongService } = require('../../services');

// Get session based on session-id
const sessionGet = async (req, res, next) => {
  const { sessionid } = req.params;

  const session = await SessionService.getSession(sessionid);
  const availableSongs = (await SongService.getSongs()).filter(
    song =>
      // eslint-disable-next-line no-underscore-dangle
      !session.songs.find(sessionSong => sessionSong._id.toString() === song._id.toString()),
  );

  res.locals.session = session;
  res.locals.availableSongs = availableSongs;
  next();
};

module.exports = sessionGet;
