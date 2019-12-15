const express = require('express');

const {
  sessionList,
  sessionDelete,
  sessionGet,
  sessionUpdate,
  sessionCreate,
  sessionAddSong,
  sessionRemoveSong,
  sessionAddParticipant,
  sessionRemoveParticipant,
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
sessionRouter.get('/session-create', renderMW('session/session-create'));
sessionRouter.post('/session-create', sessionCreate, renderMW('session/session-create'));

sessionRouter.use('/session-add-song', authCheck, roleCheck);
sessionRouter.get('/session-add-song', sessionAddSong);

sessionRouter.use('/session-remove-song', authCheck, roleCheck);
sessionRouter.get('/session-remove-song', sessionRemoveSong);

sessionRouter.use('/session-add-participant', authCheck, roleCheck);
sessionRouter.use('/session-add-participant', sessionAddParticipant);

sessionRouter.use('/session-remove-participant', authCheck, roleCheck);
sessionRouter.use('/session-remove-participant', sessionRemoveParticipant);

module.exports = sessionRouter;
