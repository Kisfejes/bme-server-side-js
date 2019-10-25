const express = require('express');

const { render } = require('../middlewares/render/index');
const { loginWithGoogle, logout } = require('../middlewares/auth');

const authRouter = new express.Router();

authRouter.get('/login', render.bind(null, 'login'));
authRouter.get('/login-with-google', loginWithGoogle);
authRouter.get('/logut', logout);

module.exports = authRouter;
