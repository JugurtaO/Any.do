module.exports.checkAuthorization = (req,res,next) =>{
   
    if(!req.session?.active_user_email){
        req.flash("danger", "Please log in to proceed.");
        return res.redirect("/users/login");
    }
  
    if(req.session.active_user_id == req.params?.user_id){
        return next();
    }else{
        return res.status(401).send("Not authorized.");
    }
    
}