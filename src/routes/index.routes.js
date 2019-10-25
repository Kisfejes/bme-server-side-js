const express = require('express');
//
const songRouter = require('./song.routes');
const sessionRouter = require('./session.routes');
const authRouter = require('./auth.routes');
//
const { authCheck, roleCheck } = require('../middlewares/auth');

const indexRouter = new express.Router();

indexRouter.use('*', authCheck, roleCheck);

indexRouter.use(songRouter);
indexRouter.use(sessionRouter);
indexRouter.use(authRouter);

module.exports = indexRouter;
