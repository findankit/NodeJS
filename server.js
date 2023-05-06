require("./javascript/array");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const morgan = require('morgan');
const router = require("./routes");
const httpstatus = require('http-status');
const { authorization } = require("./middlewares/authorization");
const db = require("./config/db");



app.use(bodyparser.json());
app.use(morgan('dev'));

app.use("/", router);


app.use(function(error, req, res, next) {
  console.log(error);
  if(error) {
    res.status(httpstatus.BAD_REQUEST).json({
      success: false,
      fromErrorHandler: true,
      message: error.message
    })
  }
})

app.listen(3002, function () {
  console.log("server started 3002");
});
