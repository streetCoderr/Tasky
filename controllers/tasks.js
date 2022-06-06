const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {createCustomApiErr} = require('../errors/custom_api_error');

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
})

const getTask = asyncWrapper(async (req, res, next) => {
  const {id} = req.params
  const task = await Task.findOne({_id: id});
  if (!task) {
    return next(createCustomApiErr(`The task with id: ${id} could not be found.`, 404));
  }
  res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req, res, next) => {
  const {id} = req.params
  const {acknowledged, modifiedCount} = await Task.updateOne({_id: id}, req.body, {runValidators: true});
  if (!acknowledged) return next(createCustomApiErr("An error occured. Try again later", 502));
  if (!modifiedCount) return next(createCustomApiErr(`The task with id: ${id} could not be found`, 404));
  res.status(200).json({msg: "Task updated successfully"});
})

const deleteTask = asyncWrapper(async (req, res, next) => {
  const {id} = req.params
  const {acknowledged, deletedCount} = await Task.deleteOne({_id: id});
  if (!acknowledged) return next(createCustomApiErr("An error occured. Try again later", 502));
  if (!deletedCount) return next(
    createCustomApiErr(
      `This task with id: ${id} could not be found, hence was not deleted`, 404
    )
  )
  res.status(200).json({msg: "Task deleted successfully"});
})

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}