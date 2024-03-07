const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "sms",
});

module.exports = mysqlPool;
