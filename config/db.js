const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "sms-nithyanandnadar-2a6e.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_6vGpOQ6O48SMgKIq9Qg",
  database: "sms",
  port: "21183",
});

module.exports = mysqlPool;
