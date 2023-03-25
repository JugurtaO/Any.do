const express = require('express');
const router = express.Router();

const { viewTask } = require('../Controllers/viewTask');
const { addTask } = require('../Controllers/addTask');
const {editTask}  = require('../Controllers/editTask');
const  {deleteTask} = require('../Controllers/deleteTask');
const {viewEditPage}= require('../Controllers/viewEditPage');


router.get('/', viewTask);
router.get('/:task_id/editPage',viewEditPage);
router.post("/add", addTask)
router.post("/:task_id/edit", editTask)
router.post("/:task_id/delete", deleteTask)






module.exports.router = router;
