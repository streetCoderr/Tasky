const getTasks = (req, res) => {
  res.send("Retrieve all tasks");
}

const createTask = (req, res) => {
  res.send("Create a task");
}

const getTask = (req, res) => {
  res.send("Retrieve a task");
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