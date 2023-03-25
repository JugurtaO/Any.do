const { db_handler } = require("../config/config");

module.exports.editTask = (req, res) => {

    const { task_body } = req.body;
    const { task_id } = req.params;

    queryString = `UPDATE Task SET Task_Body = '${task_body}' WHERE Task_ID = ${task_id} ;`;

    db_handler.query(queryString, (err) => {
        if (err)
            console.log("Error playload is set to: " + err.message);

        res.redirect('/');

    })

}