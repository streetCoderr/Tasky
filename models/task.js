const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskTitle: {
    type: String, 
    required: [true, 'You have to provide the task title'],
    trim: true,
    maxlength: [30, 'The length of your string should not be more than 30'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);