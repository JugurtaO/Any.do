const { db_handler } = require("../config/config");

module.exports.addTask = (req, res) => {
  
    const { task_body } = req.body;
    


    queryString = `INSERT INTO Task (Task_Body) VALUES ('${task_body}');`;

    db_handler.query(queryString, (err) => {
        if (err)
            console.log("Error playload is set to: " + err.message);

        else 
            res.redirect('/');
        // res.send('OK.')
       
      

    })

}