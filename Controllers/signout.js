const { db_handler } = require("../config/config");
const bcrypt = require("bcryptjs");
const flash = require("connect-flash");
module.exports.signout = (req, res) => {

    const { user_email, user_password } = req.body;

    let sql = `
        SELECT * FROM USER
        WHERE user_email = '${user_email}'; `;


    db_handler.query(sql, (err, results) => {
        if (err) return res.send("Error payload is set to : " + err.message);


        if (!results || results.length != 1) {
            req.flash("danger","Email or Password incorrect, try again !");
            return res.redirect("/users/signout");
        }



        let safetoDelete = bcrypt.compareSync(user_password, results[0].user_password);

        if (!safetoDelete){
            req.flash("danger","Email or Password incorrect, try again !");
            return res.redirect("/users/signout");
        };

        sql = `
            DELETE FROM Trash WHERE user_id =${results[0].user_id};
            DELETE FROM Task WHERE user_id =${results[0].user_id};
            DELETE FROM USER WHERE user_id =${results[0].user_id};`;



        db_handler.query(sql, (err) => {
            /** sql does not work for an error that we do not understand. */
            // if (err) return res.send("Error payload is set to : "+ err.message);

            // destroy the session and the corresponding file.
            req.session.destroy();

            req.flash("success","Successfully signed out.");
            return res.redirect("/signup");
        })

    });
}