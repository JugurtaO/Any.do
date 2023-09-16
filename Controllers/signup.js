const { db_handler } = require("../config/config");
const bcrypt = require("bcryptjs");
const flash = require("connect-flash");
module.exports.signup = (req, res) => {

    const { user_nickname, user_email, user_password } = req.body;

    if (!user_nickname.length || !user_email.length || !user_password.length) {
        req.flash("danger", "Credentials can not be blank !");
        return res.redirect("/users/signup");
    }

    // hash the password
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(String(user_password), salt);

    let  sql1 = `INSERT INTO USER
            (user_nickname,user_email,user_password)
        VALUES
            ('${user_nickname}', '${user_email}', '${hash}');`;

    db_handler.query(sql1, (err) => {

        if (err) {
            return res.send("Error payload is set to hola : " + err.message);
        }
        let sql2 = `
            SELECT user_id
            FROM USER
            WHERE user_email ='${user_email}';`;

        db_handler.query(sql2, (err, results) => {
            if (err) {
                return res.send("Error payload is set to here : " + err.message);
            }

            if (!results || results.length != 1) {
                req.flash("danger", "Something went wrong. Please log in to proceed !.");
                return res.redirect("/users/login");

            }

            let user_id = results[0].user_id;


            // create session for the current user &send back a cookie 
            req.session.active_user_email = user_email;
            req.session.active_user_id = user_id;
            req.session.active_user_nickname= user_nickname;

            req.flash("success", "Successfully signed up.");
            return res.redirect("/home");
        })
    });
}