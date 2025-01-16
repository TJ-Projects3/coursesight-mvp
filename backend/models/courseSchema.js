import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  student: { type: String, required: true },
  testimonial: { type: String, required: true }
});

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 }
});

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    unique: true
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videoUrl: { type: String, required: true },
  testimonials: [testimonialSchema],
  professors: [professorSchema]
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;