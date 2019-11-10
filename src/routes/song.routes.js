const express = require('express');

const {
  songList,
  songDelete,
  songGet,
  songUpdate,
  songCreate,
} = require('../middlewares/song/index');
const { renderMW } = require('../middlewares/render');

const songRouter = new express.Router();

songRouter.get('/songs', songList, renderMW('songs'));

songRouter.patch('/songs/:song-id', songUpdate, renderMW('song'));
songRouter.get('/songs/:song-id', songGet, renderMW('song'));
songRouter.delete('/songs/:song-id', songDelete);

songRouter.get('/song-create', songCreate, renderMW('song-create'));
songRouter.post('/song-create', songCreate, renderMW('song-create'));

module.exports = songRouter;
