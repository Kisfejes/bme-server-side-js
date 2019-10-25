const express = require('express');

const {
  songList,
  songDelete,
  songGet,
  songUpdate,
  songCreate,
} = require('../middlewares/song/index');
const { render } = require('../middlewares/render');

const songRouter = new express.Router();

songRouter.get('/songs', songList, render.bind(null, 'songs'));

songRouter.get('/songs/:song-id', songGet, render.bind(null, 'song'));
songRouter.patch('/songs/:song-id', songUpdate, render.bind(null, 'song'));
songRouter.delete('/songs/:song-id', songDelete);

songRouter.get('/song-create', songCreate, render.bind(null, 'song-create'));
songRouter.post('/song-create', songCreate, render.bind(null, 'song-create'));

module.exports = songRouter;
