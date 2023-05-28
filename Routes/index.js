const express = require('express');
const router = express.Router();

const taskControllers=require("../Controllers/index");
const {sanitize}=require("../middlewares/sanitization/sanitize");
const {checkAuthorization}=require("../middlewares/auth/checkAuthorization");
const {checkLogin}=require("../middlewares/auth/checkLogin");




router.get('/',sanitize,taskControllers.renderHome);
router.get('/home',sanitize,taskControllers.renderHome);
router.get('/allTasks',sanitize,checkLogin,taskControllers.viewTask);
router.get('/about',sanitize,taskControllers.renderAbout);
router.get('/trash',sanitize,checkLogin,taskControllers.renderTrash);
router.get('/users/login',sanitize,taskControllers.renderLogin);
router.get('/users/signup',sanitize,taskControllers.renderSignup);
router.get('/users/signout',sanitize,taskControllers.renderSignout);
router.get('/tasks/:task_id/editPage',checkLogin,sanitize,taskControllers.viewEditPage);

router.post("/tasks/add", sanitize,checkLogin,taskControllers.addTask);
router.post("/tasks/:task_id/restore", sanitize,checkLogin,taskControllers.restoreTask);
router.post("/tasks/:task_id/edit", sanitize,checkLogin,taskControllers.editTask)
router.post("/tasks/:task_id/delete",sanitize, checkLogin,taskControllers.deleteTask)

router.post("/users/signup",sanitize,taskControllers.signup);
router.post("/users/login",sanitize,taskControllers.login);
router.post("/users/logout",sanitize,taskControllers.logout);
router.post("/users/signout",sanitize,taskControllers.signout);



module.exports.router = router;
