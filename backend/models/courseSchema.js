import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  student: { type: String },
  testimonial: { type: String, required: true }
});

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 }
});

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    unique: true,
    index: true
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videoUrl: { type: String, required: true },
  testimonials: [testimonialSchema],
  professors: [professorSchema],
  comments: [commentSchema]
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;