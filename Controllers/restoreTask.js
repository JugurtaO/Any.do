const { db_handler } = require("../config/config");

module.exports.restoreTask = (req, res) => {
  
    const { task_id } = req.params;

    //get task_body and user_id in order to insert task into Task before removing it from Trash table
    query = `SELECT *  FROM Trash WHERE Task_ID = ${task_id};`;

    db_handler.query(query, (err, results) => {
        if (err)
            console.log("Error playload is set to: " + err.message);
        else
            if (results && results.length == 1) {
                let Task_Body = results[0].Task_Body;
                let user_id = results[0].user_id;


                //insert task into task before deleting it from Trash table
                query2 = `INSERT INTO Task (Task_Body,user_id) VALUES ('${Task_Body}','${user_id}');`;

                db_handler.query(query2, (err) => {
                    if (err)
                        console.log("Error playload is set to: " + err.message);

                    else {

                        //now delete task from Trash table after retoring it
                        queryString = `DELETE FROM Trash WHERE Task_ID = ${task_id};`;
                        db_handler.query(queryString, (err) => {
                            if (err)
                                console.log("Error playload is set to: " + err.message);
                            else
                                res.redirect('/trash');
                            

                        })
                    }



                })


            }
     

    })










} 