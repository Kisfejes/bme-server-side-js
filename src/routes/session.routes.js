const express = require('express');

const {
  sessionList,
  sessionDelete,
  sessionGet,
  sessionUpdate,
  sessionCreate,
} = require('../middlewares/session/index');
const { renderMW } = require('../middlewares/render');
//
const { authCheck, roleCheck } = require('../middlewares/auth');

const sessionRouter = new express.Router();

sessionRouter.use('/sessions', authCheck, roleCheck);
sessionRouter.get('/sessions', sessionList, renderMW('session/sessions'));
sessionRouter.get('/sessions/:sessionid', sessionGet, renderMW('session/session'));
sessionRouter.patch('/sessions/:sessionid', sessionUpdate, renderMW('session/session'));

sessionRouter.use('/sessions', authCheck, roleCheck);
sessionRouter.get('/session-delete/:sessionid', sessionDelete);

sessionRouter.use('/session-create', authCheck, roleCheck);
sessionRouter.get('/session-create', sessionCreate, renderMW('session/session-create'));
sessionRouter.post('/session-create', sessionCreate, renderMW('session/session-create'));

module.exports = sessionRouter;
