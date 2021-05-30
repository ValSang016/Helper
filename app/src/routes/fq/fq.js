var express = require('express');
var router = express.Router();
const ctrl = require("./fq.ctrl");


/* GET home page. */
router.get('/', ctrl.output.faq);

// router.get('/list/:page', ctrl.output.list);

// // 글쓰기 화면 표시 GET
// router.get('/write', ctrl.output.write);
// //글 불러오기
// router.get('/read/:idx', ctrl.output.read);
// //글 수정 화면 표시 GET
// router.get('/update', ctrl.output.update);
// //글 삭제 화면 표시 GET
// router.get('/delete', ctrl.output.delete);



// // 글쓰기 로직 처리 POST
// router.post('/write', ctrl.process.write);
// //글 수정 로직 처리 POST
// router.post('/update', ctrl.process.update);
// //글 삭제 로직 처리 POST
// router.post('/delete', ctrl.process.delete);



module.exports = router;
