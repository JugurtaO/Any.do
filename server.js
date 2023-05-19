if (process.NODE_ENV != "production" ){
    require("dotenv").config();
}
// requiring express and create an express application
const express = require('express')
const app = express();
// const dotenv=require('dotenv');
const path=require('path');

//requiring bcryptjs 
const bcrypt=require("bcryptjs");

//requiring express-session
const sessions=require("express-session");



// dotenv.config();
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
    if (err){
        console.log("Ouups, cannot get connection to MySQL server! " + err.message);
    }
        
    else
        console.log("Successfully connected  to MySQL server");
});

/** SETUP OUR SESSIONS */
const sessionOption = {
    name: String(process.env.SESSION_NAME),
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: false,
    store: new filestore(),
    cookie: {
        maxAge: 5 * 24 * 60 * 60 * 1000, //  max_age = 3 days
    }
}

app.use(sessions(sessionOption));
//routes handlers
app.use(router);



// launch application on port 3000
const port= process.env.PORT || 3000;
app.listen(port, () => {
    console.log("app runs on [port:3000]");
})