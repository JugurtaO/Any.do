const { db_handler } = require("../config/config");

module.exports.viewTask = (req, res) => {

    queryString = 'SELECT * FROM Task;';

    db_handler.query(queryString, (err, results) => {
        if (err)
            console.log("Error playload is set to: " + err.message);

        // res.json(results);
        let tasks=(results);
        
        res.render('task',{tasks});
    })

}