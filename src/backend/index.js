require('dotenv').config({ path: '../../.env.local' }); // Ensure this is at the top
const express = require('express');
const mongoose = require('mongoose');
const Course = require('./courseSchema');

const app = express();
const port = process.env.PORT;
console.log("PORT:", port); // Debugging line
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging line

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  });

app.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
});