module.exports.logout = (req, res) => {
    
    if(!req.session.active_user_email){
        return res.send("Already logged out!");
    }

    req.session.active_user_email = null;

    //added line 
    req.session.active_user_id = null;

    return res.send("Successfuly logged out.");
}