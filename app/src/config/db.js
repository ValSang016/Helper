const mysql = require("mysql");

const db = mysql.createConnection( {
    host: "login-lectures11.c5ok6hulvbab.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "rina1315",
    database: "login_lecture",
});

db.connect();

module.exports = db;