// src/app/courses.js
import React from 'react';
import CourseCard from './CourseCard';
import { Container, Grid } from '@mui/material';

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for course 1' },
  { id: 2, title: 'Course 2', description: 'Description for course 2' },
  // Add more courses as needed
];

export default function Courses() {
  return (
    <Container>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}