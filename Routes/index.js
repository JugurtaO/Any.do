const express = require('express');
const router = express.Router();

const { viewTask } = require('../Controllers/viewTask');
const { addTask } = require('../Controllers/addTask');
const {editTask}  = require('../Controllers/editTask');
const  {deleteTask} = require('../Controllers/deleteTask');


router.get('/', viewTask);
router.post("/add", addTask)
router.post("/:task_id/edit", editTask)
router.post("/:task_id/delete", deleteTask)






module.exports.router = router;
