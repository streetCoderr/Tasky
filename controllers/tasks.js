const getTasks = (req, res) => {
  res.send("Retrieve all tasks");
}

const createTask = (req, res) => {
  res.json(req.body);
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