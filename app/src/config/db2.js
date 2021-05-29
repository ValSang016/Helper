const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'login-lectures11.c5ok6hulvbab.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '202031872',
    database: 'board'
  });

module.exports = pool;