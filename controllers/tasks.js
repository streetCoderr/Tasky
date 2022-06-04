const Task = require('../models/task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error)
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error)
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({_id: req.params.id});
    if (!task) {
      return res.status(404).json({ msg: "The requested data could not be found" })
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateTask = async (req, res) => {
  try {
    const {acknowledged, modifiedCount} = await Task.updateOne({_id: req.params.id}, req.body, {runValidators: true});
    if (!acknowledged) return res.status(502).json({msg: "An error occured. Try again later"});
    if (!modifiedCount) return res.status(404).json({msg: "This task was not updated because it could not be found"});
    res.status(200).json({msg: "Task updated successfully"});
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteTask = async (req, res) => {
  try {
    const {acknowledged, deletedCount} = await Task.deleteOne({_id: req.params.id});
    if (!acknowledged) return res.status(502).json({msg: "An error occured. Try again later"});
    if (!deletedCount) {
      return res.status(404).json({msg: "This task could not be found, hence was not deleted"});
    }
    res.status(200).json({msg: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}