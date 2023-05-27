const flash=require("connect-flash");
module.exports.logout = (req, res) => {
    
    if(!req.session.active_user_email){
        req.flash("success","Already logged out.");
        return res.redirect("/users/login");
    }

    req.session.active_user_email = null;

    //added line 
    req.session.active_user_id = null;
    
    req.flash("success","Successfuly logged out.");
    return res.redirect("/users/login");
  
}