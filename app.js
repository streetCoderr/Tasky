const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error_handler');
const notFound = require('./middleware/not_found');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);
app.use(errorHandler);

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