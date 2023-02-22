const { db_handler } = require("../config/config");

module.exports.deleteTask = (req, res) => {

    const { task_id } = req.params;

    queryString = `DELETE FROM Task WHERE Task_ID = ${task_id};`;

    db_handler.query(queryString, (err) => {
        if (err)
            console.log("Error playload is set to: " + err.message);

        res.send("OK.");

    })

}