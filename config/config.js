
const mysql = require('mysql');


module.exports.db_handler = mysql.createConnection({
host: String(process.env.DB_host),
user: String(process.env.DB_user),
password: String(process.env.DB_password),
database: String(process.env.DB_database)

// host: "localhost",
// user:"root",
// password:"Jug20022002",
// database:"TasksList"

})



