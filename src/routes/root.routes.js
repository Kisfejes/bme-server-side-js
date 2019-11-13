const express = require('express');
//
const songRouter = require('./song.routes');
const sessionRouter = require('./session.routes');
const authRouter = require('./auth.routes');

const rootRouter = new express.Router();

// default page (will redirect to login if authentication needed)
rootRouter.get('/', (req, res) => {
  res.redirect('/sessions');
});

rootRouter.use(authRouter);
rootRouter.use(songRouter);
rootRouter.use(sessionRouter);

module.exports = rootRouter;
