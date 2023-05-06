const express = require("express");
const { greeting, successGreeting } = require("../controller/greetings");
const {authorization} = require('../middlewares/authorization');

const greetingRouter = express.Router();

greetingRouter.get("/greetings", authorization, greeting);

greetingRouter.post("/success", successGreeting);

module.exports = greetingRouter;
