import express from "express";
import { getCourses, createCourse, updateCourse, deleteCourse, addComment } from "../controllers/courseController.js";
import mongoose from "mongoose";
import Course from "../models/courseSchema.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

router.post("/:id/comments", addComment);

export default router;