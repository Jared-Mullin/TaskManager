const Task = require('../models/task.model');

exports.apiIndex = (req, res) => {
    res.send('This is the API index');
};

exports.taskList = (req, res, next) =>
    Task.find({}).exec((err, tasks) => {
        if (err) {
            return next(err);
        } else {
            res.json(tasks);
        }
    });

exports.taskDetail = (req, res, next) => {
    Task.findById(req.params.id).exec((err, task) => {
      if (err) {
          return next(err);
      } else if (task == null) {
          const err = new Error('Task not Found');
          err.status = 404;
          return next(err);
      } else {
          res.json(task);
        }
    });
};

exports.taskCreate = (req, res, next) => {
    let task = new Task(req.body);
    task.save().then(task => {
        res.status(200).json({'Task': 'Added Successfully!'})
        res.redirect('/tasks');
    })
    .catch(err => {
        res.status(400).send('Failed to add new task!')
    });
};

exports.taskDelete = (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, task) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Removed Successfully');
        }
    })
};

exports.taskUpdate = (req, res) => {
    res.send('Update a Task!');
};
