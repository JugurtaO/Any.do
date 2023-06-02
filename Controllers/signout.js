const { db_handler } = require("../config/config");
const bcrypt = require("bcryptjs");
const flash = require("connect-flash");
module.exports.signout = (req, res) => {

    const { user_email, user_password } = req.body;
    const USER_ID = req.session.active_user_id;
    // console.log("user_id=",USER_ID);
    let sql = `
        SELECT * FROM USER
        WHERE user_email = '${user_email}'; `;


    db_handler.query(sql, (err, results) => {
        if (err) return res.send("Error payload is set to : " + err.message);


        if (!results || results.length != 1) {
            req.flash("danger", "Email or Password incorrect, try again !");
            return res.redirect("/users/signout");
        }



        let safetoDelete = bcrypt.compareSync(user_password, results[0].user_password);

        if (!safetoDelete) {
            req.flash("danger", "Email or Password incorrect, try again !");
            return res.redirect("/users/signout");
        };

       let  sql1 = ` DELETE FROM Trash WHERE user_id =${USER_ID};`;
        



        db_handler.query(sql1, (err) => {
            /** sql does not work for an error that we do not understand. */
            //lE PROBLÈME EST LÀ , LA SYNTAXE DE LA REQÛÊTE EST FAUSSE 
            if (err) return res.send("Error payload is set to : " + err.message);
            let sql2 = ` DELETE FROM Task WHERE user_id =${USER_ID} ;`;
            db_handler.query(sql2, (err) => {

                if (err) return res.send("Error payload is set to : " + err.message);

                let sql3 = ` DELETE FROM USER WHERE user_id =${USER_ID} ;`;

                db_handler.query(sql3, (err) => {

                    if (err) return res.send("Error payload is set to  : " + err.message);


                    // destroy user session.
                    req.flash("success", "Successfully signed out. Good bye!");
                    req.session.active_user_id=null;
                    req.session.active_user_email=null;

                    return res.redirect("/");
                })

            })







        })




    });
}