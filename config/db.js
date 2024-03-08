const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: " LOCALHOST",
  user: "actorsboard_smsuser",
  password: "Mumbai@2050",
  database: "actorsboard_sms",
  port: "3306",
});

module.exports = mysqlPool;
