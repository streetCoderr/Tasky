const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to tasky");
})

app.use('/api/v1/tasks', taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, () => {
      console.log(`Server is listening at port ${port}`);
    })
  } catch (error) {
    console.error(error);
  }
}

start()