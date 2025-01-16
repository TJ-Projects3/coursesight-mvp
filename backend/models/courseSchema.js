import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  student: { type: String, required: true },
  testimonial: { type: String, required: true }
}, { _id: false });

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 }
}, { _id: false });

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    index: true,
    unique: true
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videoUrl: { type: String, required: true },
  testimonials: [testimonialSchema],
  professors: [professorSchema]
}, {
  timestamps: true,
  autoIndex: true
});

courseSchema.index({ title: 1 });

courseSchema.on('index', function(err) {
  if (err) {
    console.error('Course index error: %s', err);
  }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;