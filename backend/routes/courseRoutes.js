import express from "express";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;