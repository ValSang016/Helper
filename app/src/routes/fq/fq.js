const express = require('express');
const router = express.Router();
const ctrl = require("./fq.ctrl");


/* GET home page. */
router.get('/', ctrl.output.qna);

module.exports = router;
