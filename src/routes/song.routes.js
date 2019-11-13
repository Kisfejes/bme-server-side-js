const express = require('express');

const {
  songList,
  songDelete,
  songGet,
  songUpdate,
  songCreate,
} = require('../middlewares/song/index');
const { renderMW } = require('../middlewares/render');
//
const { authCheck, roleCheck } = require('../middlewares/auth');

const songRouter = new express.Router();

songRouter.use('/songs', authCheck, roleCheck);
songRouter.get('/songs', songList, renderMW('song/songs'));
songRouter.post('/songs/:songid', songUpdate, songGet, renderMW('song/song'));
songRouter.get('/songs/:songid', songGet, renderMW('song/song'));

songRouter.use('/song-delete', authCheck, roleCheck);
songRouter.get('/song-delete/:songid', songDelete);

songRouter.use('/song-create', authCheck, roleCheck);
songRouter.get('/song-create', songCreate, renderMW('song/song-create'));
songRouter.post('/song-create', songCreate, renderMW('song/song-create'));

module.exports = songRouter;
