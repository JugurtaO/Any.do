const { db_handler } = require("../config/config");
const bcrypt = require("bcryptjs");

const flash=require("connect-flash");

module.exports.login = (req, res) => {

    const { user_email, user_password } = req.body;


    
    if (!user_email.length || !user_password.length){
        req.flash("danger","Credentials can not be blank !");
        return res.redirect("/users/login"); 
    }
    

    if(req.session.active_user_email){
        req.flash("success","Already logged in.");
        return res.redirect("/home");
    }

    let sql = `
        SELECT *
        FROM USER
        WHERE user_email = '${user_email}' ;`;

    db_handler.query(sql, (err, result) => {
        if (err) {
            return res.send("Error payload is set to : "+ err.message);
        }
        if(!result || result.length != 1){
            req.flash("danger","Email or Password incorrect, try again!")
            return res.redirect("/users/login");
        }
       

        // check if the typed password is equal to the hashed database password.
        const is_password_correct = bcrypt.compareSync(user_password, result[0].user_password);

        if(!is_password_correct){
            req.flash("danger","Email or Password incorrect, try again !")
            return res.redirect("/users/login");
        }

        let user_id = result[0].user_id;


        // create session for the current user &send back a cookie 
        req.session.active_user_email = user_email;
        req.session.active_user_id = user_id ;

        req.flash("success","Successfuly logged in.")
        return res.redirect("/home");
        
    });
}