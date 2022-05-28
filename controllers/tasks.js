const Task = require('../models/task');

const getTasks = (req, res) => {
  res.send("Retrieve all tasks");
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
}

const getTask = (req, res) => {
  res.json({id: req.params.id});
}

const updateTask = (req, res) => {
  res.send("Update a task");
}

const deleteTask = (req, res) => {
  res.send("Delete a task");
}

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}