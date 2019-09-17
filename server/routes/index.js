const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller');

router.get('/', TaskController.apiIndex);

router.get('/tasks', TaskController.taskList);

router.get('/task/:id', TaskController.taskDetail);

router.post('/task/create', TaskController.taskCreate);

router.post('/task/update/:id', TaskController.taskUpdate);

router.get('/task/delete/:id', TaskController.taskDelete);

module.exports = router;
