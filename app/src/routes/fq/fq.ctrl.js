"use strict";
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = require("../../config/db2");

const output = {
    qna: (req, res, next) => {
        // board/ 로 접속할 경우 전체 목록 표시로 리다이렉팅
        res.render("fq/faq");
    },
};


module.exports = {
   output,
   process,
};
