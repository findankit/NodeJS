const { login, signup } = require('../controller/user');

const userRouter = require('express').Router();

userRouter.post('/login', login);

userRouter.post('/signup', signup)


module.exports = userRouter;