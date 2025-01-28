import Course from "../models/courseSchema.js";
import mongoose from "mongoose";


export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        console.error("Error in retrieving courses:", error.message);
        res.status(404).json({ success: false, message: "Could not retrieve all courses" });
    }
};


export const createCourse = async (req, res) => {
    const course = req.body;

    if (!course.title || !course.description || !course.image || !course.videoUrl) {
        return res.status(400).json({ success: false, message: "Please fill in all required fields!" });
    }

    const newCourse = new Course(course);
    try {
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        console.error("Error creating course:", error.message);
        res.status(500).json({ success: false, message: "Error creating course" });
    }
};


export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Course not found, please enter valid ID" });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, course, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.status(200).json({ success: true, data: updatedCourse });
    } catch (error) {
        console.error("Error updating course:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Please provide a valid course ID" });
    }

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.status(200).json({ success: true, message: "Course successfully deleted" });
    } catch (error) {
        console.error("Error deleting course:", error.message);
        res.status(500).json({ success: false, message: "Error deleting course" });
    }
};