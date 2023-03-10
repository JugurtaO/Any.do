// requiring express and create an express application
const express = require('express')
const app = express();
const dotenv=require('dotenv');
const path=require('path');



dotenv.config();
const { db_handler } = require('./config/config');

const { router } = require("./Routes/index");


// Set up middlewars 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'Views'));

//Connecting to MySQL DB:
db_handler.connect((err) => {
    if (err)
        console.log("Ouups, cannot get connection to MySQL server! " + err.message);
    else
        console.log("Successfully connected  to MySQL server");
});


//routes handlers
app.use(router);



// launch application on port 3000
app.listen(3000, () => {
    console.log("app runs on [port:3000]");
})