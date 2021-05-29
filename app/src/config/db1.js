const mysql = require("mysql");

const db = mysql.createConnection( {
    host: "login-lectures11.c5ok6hulvbab.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "202031872",
    database: "login_lecture",
});

db.connect();

module.exports = db;