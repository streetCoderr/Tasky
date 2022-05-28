const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskTitle: String, completed: Boolean
});

module.exports = mongoose.model("Task", TaskSchema);