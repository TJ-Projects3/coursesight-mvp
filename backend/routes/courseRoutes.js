import express from "express";
import Course from "../models/courseSchema.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const courses = Course.find({})
        res.status(200).send({ success: true, data: courses})
    } catch (error) {
        console.error("Error in retrieving courses")
        res.status(404).send({ success: false, message: "Could not retrieve all products"})
    }
});

router.post("/", async (req, res) => {
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
});

export default router;
