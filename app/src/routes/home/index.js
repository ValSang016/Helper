"use strict";
var util = {};
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");



router.get("/", ctrl.output.home); 
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/logout", ctrl.output.logout);

router.get("/admin", checkPermission, ctrl.output.admin); 
router.get("/admin/list/:page", checkPermission, ctrl.output.adlist);
router.get("/admin/read/:idx", checkPermission, ctrl.output.adread); 
router.get("/admin/write", checkPermission, ctrl.output.adwrite); 
router.get("/admin/update", checkPermission, ctrl.output.adupdate);
router.get("/admin/delete", checkPermission, ctrl.output.addelete); 


router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


  module.exports = router;


  //특정아이디로만 접속가능하게 함/관리자 아이디
  function checkPermission(req, res, next){
    if(req.session.idx != '202031872') 
    return util.noPermission(req, res);

    next();
  }
util.noPermission = function(req, res){
  res.redirect('/login');
}