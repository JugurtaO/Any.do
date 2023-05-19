const express = require('express');
const router = express.Router();

const taskControllers=require("../Controllers/index");




router.get('/', taskControllers.viewTask);
router.get('/:task_id/editPage',taskControllers.viewEditPage);
router.post("/add", taskControllers.addTask)
router.post("/:task_id/edit", taskControllers.editTask)
router.post("/:task_id/delete", taskControllers.deleteTask)






module.exports.router = router;
