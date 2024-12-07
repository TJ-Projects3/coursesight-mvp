const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  student: String,
  testimonial: String
});

const professorSchema = new mongoose.Schema({
  name: String,
  rating: Number
});

const courseSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videoUrl: { type: String, required: true },
  testimonials: [testimonialSchema],
  professors: [professorSchema]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;