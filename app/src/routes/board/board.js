var express = require('express');
var router = express.Router();
const ctrl = require("./board.ctrl");


/* GET home page. */
router.get('/', ctrl.output.board);

router.get('/list/:page', ctrl.output.list);

// 글쓰기 화면 표시 GET
router.get('/write', ctrl.output.write);
//글 불러오기
router.get('/read/:idx', ctrl.output.read);
//글 수정 화면 표시 GET




// 글쓰기 로직 처리 POST
router.post('/write', ctrl.process.write);
//글 수정 로직 처리 POST
router.post('/update', ctrl.process.update);
//글 삭제 로직 처리 POST
router.post('/delete', ctrl.process.delete);



module.exports = router;
