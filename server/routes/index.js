const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller');

router.get('/', TaskController.index);

router.get('/api/', TaskController.apiIndex);

router.get('/api/tasks', TaskController.taskList);

router.get('/api/task/:id', TaskController.taskDetail);

router.post('/api/task/create', TaskController.taskCreate);

router.post('/api/task/update/:id', TaskController.taskUpdate);

router.get('/api/task/delete:id', TaskController.taskDelete);

module.exports = router;
