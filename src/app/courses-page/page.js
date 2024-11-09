// src/app/courses.js
import React from 'react';
import CourseCard from './components/CourseCard';
import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for course 1' },
  { id: 2, title: 'Course 2', description: 'Description for course 2' },
  // Add more courses as needed
];

export default function Courses() {
  return (
    <Container>
      <Grid2 container spacing={4}>
        {courses.map((course) => (
          <Grid2 item key={course.id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}