'use server'

import express from "express";
import Course from "./courseSchema";

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log('Server started at port 3000')
});

app.post("/api/courses", async (req, res) => {
    const course = req.body

    if(!course.title || !course.description || !course.image || !course.videoUrl) {
        res.status(400).json({ success: false, message: "Please fill in all required fields!" })
    }

    const newCourse = new Course
    try {
        await Course.bulkSave()
        res.status(201).json({ success: true, data: newCourse })
    } catch(error) {
        console.error("Error creating course:", error.message)
        res.status(500).json({ success: false, data: newCourse })
    }

})
