const { db_handler } = require("../config/config");

module.exports.addTask = (req, res) => {
  
    const { task_body } = req.body;
    
    const user_id = req.session.active_user_id;


    queryString = `INSERT INTO Task (Task_Body,user_id) VALUES ('${task_body}','${user_id}');`;

    db_handler.query(queryString, (err) => {
        if (err)
            console.log("Error playload is set to: " + err.message);

        else{
            req.flash("success","Task created successfully");
            return res.redirect("/allTasks"); 
        }
           
       
      

    })

}