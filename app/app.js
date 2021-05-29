"use strict";

//모듈
const express = require("express");
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


//라우트
const home = require('./src/routes/index');
const users = require('./src/routes/users');
const board = require('./src/routes/board');
const member = require('./src/routes/members')

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));




//use -> 미들 웨어를 등록해주는 메소드
app.use('/', home);
app.use('/users', users);
app.use('/board', board);
app.use('/members', member);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  

// error handlers
  
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  const http = require('http');
  app.set('port', 3001);
  const server = http.createServer(app);
  
  server.listen(app.get('port'));
  
  console.log('서버가 ' + app.get('port') + '번 포트에서 실행중입니다.!!!');
  

module.exports = app;
