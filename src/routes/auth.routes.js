const express = require('express');

const { renderMW } = require('../middlewares/render/index');
const { loginWithGoogle, logout } = require('../middlewares/auth');

const authRouter = new express.Router();

authRouter.get('/login', renderMW('login'));
authRouter.get('/login-with-google', loginWithGoogle);
authRouter.get('/logout', logout);

module.exports = authRouter;
