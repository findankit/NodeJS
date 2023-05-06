const express = require("express");
const todoRouter = require("./todo.routes");
const greetingRouter = require("./greetings");
const userRouter = require("./user");
const router = express.Router();

router.use("/", todoRouter);
router.use('/other', greetingRouter);
router.use('/user', userRouter);

module.exports = router;
