const express = require('express');

const {
  sessionList,
  sessionDelete,
  sessionGet,
  sessionUpdate,
  sessionCreate,
} = require('../middlewares/session/index');
const { render } = require('../middlewares/render');

const sessionRouter = new express.Router();

sessionRouter.get('/sessions', sessionList, render.bind(null, 'sessions'));

sessionRouter.get('/sessions/:session-id', sessionGet, render.bind(null, 'session'));
sessionRouter.patch('/sessions/:session-id', sessionUpdate, render.bind(null, 'session'));
sessionRouter.delete('/sessions/:session-id', sessionDelete);

sessionRouter.get('/session-create', sessionCreate, render.bind(null, 'session-create'));
sessionRouter.post('/session-create', sessionCreate, render.bind(null, 'session-create'));

module.exports = sessionRouter;
