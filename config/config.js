
const mysql = require('mysql');



module.exports.db_handler= mysql.createConnection(String(process.env.DB_url));



