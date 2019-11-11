const express = require('express');

const {
  sessionList,
  sessionDelete,
  sessionGet,
  sessionUpdate,
  sessionCreate,
} = require('../middlewares/session/index');
const { renderMW } = require('../middlewares/render');

const sessionRouter = new express.Router();

sessionRouter.get('/sessions', sessionList, renderMW('session/sessions'));

sessionRouter.get('/sessions/:sessionid', sessionGet, renderMW('session/session'));
sessionRouter.patch('/sessions/:sessionid', sessionUpdate, renderMW('session/session'));
sessionRouter.delete('/sessions/:sessionid', sessionDelete);

sessionRouter.get('/session-create', sessionCreate, renderMW('session-create'));
sessionRouter.post('/session-create', sessionCreate, renderMW('session-create'));

module.exports = sessionRouter;
