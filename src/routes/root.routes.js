const express = require('express');
//
const songRouter = require('./song.routes');
const sessionRouter = require('./session.routes');
const authRouter = require('./auth.routes');
//
const { authCheck, roleCheck } = require('../middlewares/auth');

const rootRouter = new express.Router();

rootRouter.use(authRouter);
rootRouter.use(songRouter, authCheck, roleCheck);
rootRouter.use(sessionRouter, authCheck, roleCheck);

module.exports = rootRouter;
