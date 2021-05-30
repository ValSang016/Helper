"use strict";

//모듈
const http = require("http");
const express = require("express");
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const mysql=require("mysql");
const session = require('express-session');

const app = express();

//라우트
const home = require("./src/routes/home/index");
const fq = require("./src/routes/fq/fq");
const board = require("./src/routes/board/board");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
app.use(session({
  key: "sid",
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
  }
}));


//use -> 미들 웨어를 등록해주는 
app.use("/", home); 
app.use("/fq", fq); 
app.use('/board', board);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;
