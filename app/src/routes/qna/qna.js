const express = require('express');
const router = express.Router();
const ctrl = require("./fq.ctrl");


/* GET home page. */
router.get('/', ctrl.output.qna);
router.get('/list/:page', ctrl.output.list);

// 글쓰기 화면 표시 GET
router.get('/write', ctrl.output.write);
//글 불러오기
router.get('/read/:bno', ctrl.output.read);
// //글 수정 화면 표시 GET
// router.get('/qna/update', ctrl.output.update);
// //글 삭제 화면 표시 GET
// router.get('/qna/delete', ctrl.output.delete);



// 글쓰기 로직 처리 POST
router.post('/write', ctrl.process.write);
// //글 수정 로직 처리 POST
// router.post('/qna/update', ctrl.process.update);
// //글 삭제 로직 처리 POST
// router.post('/qna/delete', ctrl.process.delete);



module.exports = router;
