
const mysql = require('mysql');


module.exports.db_handler = mysql.createConnection({

  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database

})

// host: "localhost",
// user:"root",
// password:"password",
// database:"TasksList"