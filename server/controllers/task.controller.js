const Task = require('../models/task.model');

exports.index = (req, res) => {
    res.redirect('/api/');
};

exports.apiIndex = (req, res) => {
    res.send('This is the API index');
};

exports.taskList = (req, res) =>
    Task.find({}).exec((err, listTasks) => {
        if (err) {
            return next(err);
        } else {
            console.log(listTasks);
            res.json(listTasks);
        }
    });

exports.taskDetail = (req,res) => {
    res.send('Details of Task!');
};

exports.taskCreate = (req, res) => {
    let task = new Task(req.body);
    task.save().then(task => {
        res.status(200).json({'Task': 'Added Successfully!'})
    })
    .catch(err => {
        res.status(400).send('Failed to add new task!')
    });
};

exports.taskDelete = (req, res) => {
    task.findByIdAndDelete({_id: req.params.id}, (err, task) => {
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
