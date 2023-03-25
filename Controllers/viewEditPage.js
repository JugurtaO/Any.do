module.exports.viewEditPage=(req,res)=>{

    let {task_id}= req.params;
    let T={task_id};
   
    res.render('edit',{T});
}