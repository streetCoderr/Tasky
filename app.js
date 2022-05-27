const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to tasky");
})

app.use('/api/v1/tasks', taskRoutes);
app.listen(3000, () => {
  console.log(`Server is listening at port ${port}`);
})