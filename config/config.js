const mysql=require("mysql");

// in case of production use the commented line below
module.exports.db_handler= mysql.createConnection(String(process.env.DB_url));  

//otherwise use the object connection as shown below:


// module.exports.db_handler= mysql.createConnection({
//     host:String(process.env.DB_host),
//     user:String(process.env.DB_user),
//     database:String(process.env.DB_database) ,
//     password:String(process.env.DB_password) 
    
// });  

