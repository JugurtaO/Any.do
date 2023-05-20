const express = require('express');
const router = express.Router();

const taskControllers=require("../Controllers/index");
const {sanitize}=require("../middlewares/sanitization/sanitize");
const {checkAuthorization}=require("../middlewares/auth/checkAuthorization");
const {checkLogin}=require("../middlewares/auth/checkLogin");




router.get('/',sanitize,taskControllers.renderHome);
router.get('/allTasks',sanitize,taskControllers.viewTask);

router.get('/:task_id/editPage',checkLogin,sanitize,taskControllers.viewEditPage);

router.post("/add", sanitize,checkLogin,taskControllers.addTask)
router.post("/:task_id/edit", sanitize,checkLogin,taskControllers.editTask)
router.post("/:task_id/delete",sanitize, checkLogin,taskControllers.deleteTask)
router.post("/signup",sanitize,taskControllers.signup);
router.post("/login",sanitize,taskControllers.login);
router.post("/logout",sanitize,taskControllers.logout);
router.post("/signout",sanitize,taskControllers.signout);



module.exports.router = router;
