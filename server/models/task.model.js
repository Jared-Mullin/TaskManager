const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {type: String, required: true, max: 50},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true},
    dateAdded: {type: Date, required: true},
    dateCompleted: {type: Date},
});

module.exports = mongoose.model('task', TaskSchema);
