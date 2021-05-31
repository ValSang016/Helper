"use strict";

const User = require("../../models/User");

var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = require("../../config/db2");


const output = {
    home: (req, res) => {
        if(!req.session.login){
            req.session.login = false
            req.session.idx = -1
        }
        console.log(req.session.idx);
        console.log(req.session.idx);
        res.render("home/index");
    },
    login: (req, res) => {
        let session = req.session;

        res.render("home/login", {
            session : session
        });
    },
    register: (req, res) => {
        res.render("home/register")
    },
    logout: (req,res,next) => {
        req.session.destroy();
        res.clearCookie('sid');
        res.redirect("/login")
      },
    admin: (req, res) => {
        console.log("관리자 입장~~");
        res.render("admin/index");
    },
    adread: (req,res,next) => {
        var idx = req.params.idx;
        pool.getConnection(function(err,connection){
            var sql = "select idx, creator_id, title, content, hit from board where idx = ?";
            var plushit = "update board set hit = hit + 1 where idx = ?";
            connection.query(sql,[idx],function(err,row){
                if(err) console.error(err);
                console.log("1개 글 조회 결과 확인 : ",row);
                res.render('admin/read',{title: "글 조회", row:row[0]});
                connection.query(plushit,[idx],function(err,row){
                    if(err) console.error(err);
            });
            connection.release();
        });
    });
    },
    adlist:(req,res,next) => {
        pool.getConnection(function (err, connection){
            var sqlForSelectList = "SELECT idx, creator_id, title, hit FROM board";
            connection.query(sqlForSelectList, function(err,rows){
                if(err) console.error("err : "+err);
                console.log("rows : " + JSON.stringify(rows));
    
                res.render('admin/list', {title: '게시판 전체 글 조회', rows: rows});
                connection.release();
            });
        });
    },
    adwrite:(req, res, next) => {
        console.log("관리자 입장~~");
        res.render("admin/write", {title: "게시판 글 쓰기"});
    },
    adupdate: (req,res,next) => {
        var idx = req.query.idx;
    
        pool.getConnection(function(err,connection){
    
            if(err) console.error("커넥션 객체 얻어오기 에러 : ",err);
            var sql = "select idx, creator_id, title, content, hit from board where idx = ?";
            connection.query(sql,[idx],function(err,rows){
                if(err) console.error(err);
                console.log("update에서 1개 글 조회 결과 확인 : ",rows);
                res.render('admin/update',{title: "글 수정", row:rows[0]});
                connection.release();
            });
        });
    },
    addelete: (req,res,next) => {
        var idx = req.query.idx;
    
        pool.getConnection(function(err,connection){
    
            if(err) console.error("커넥션 객체 얻어오기 에러 : ",err);
            var sql = "select idx, creator_id, title, content, hit from board where idx = ?";
            connection.query(sql,[idx],function(err,rows){
                if(err) console.error(err);
                console.log("delete에서 1개 글 조회 결과 확인 : ",rows);
                res.render('admin/delete',{title: "글 삭제를 위해 패스워드를 입력하세요.", row:rows[0]});
                connection.release();
            });
        });
    },



    
};

const process = {
    login: async (req, res) => {
        let cok = req;
        const user = new User(req.body, cok);
        const response = await user.login();
        // console.log(response.id);
        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);

    },
};


module.exports = {
   output,
   process,
};
