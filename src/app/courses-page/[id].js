// src/pages/courses/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { Container, Typography } from '@mui/material';

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for course 1' },
  { id: 2, title: 'Course 2', description: 'Description for course 2' },
  // Add more courses as needed
];

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <Typography variant="h5">Course not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" component="div">
        {course.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {course.description}
      </Typography>
    </Container>
  );
}