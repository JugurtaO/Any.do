const { db_handler } = require("../config/config");
module.exports.renderTrash = (req, res) => {
        const user_id = req.session.active_user_id;

        queryString = `SELECT * FROM Trash WHERE user_id = '${user_id}';`;

        db_handler.query(queryString, (err, results) => {
            if (err)
                console.log("Error playload is set to: " + err.message);

            // res.json(results);
            let tasks = (results);

            res.render('trash', { tasks });
        })

    }

    

