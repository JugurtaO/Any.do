
const mysql = require('mysql');


// module.exports.db_handler = mysql.createConnection({
// host: String(process.env.DB_host),
// user: String(process.env.DB_user),
// password: String(process.env.DB_password),
// database: String(process.env.DB_database),
// port:process.env.DB_port


// })

module.exports.db_handler= mysql.createConnection(String(process.env.DB_url));



