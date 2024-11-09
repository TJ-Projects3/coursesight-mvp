// src/app/courses.js
'use client';
import React from 'react';
import CourseCard from './components/CourseCard';
import { Container } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const courses = [
  { id: 1, title: 'Chemistry 115', description: 'Genral Organic Chemistry for nursing majors' },
  { id: 2, title: 'Biology 121', description: 'Introduction to Human biology' },
  { id: 3, title: 'Math 330', description: 'Statiscal methods for computer science ' },
  { id: 4, title: 'Cosc 235', description: 'Introduction to computer science 2' },
  { id: 5, title: 'Physics 320', description: 'The theory of computational physics in our world today' },
  { id: 6, title: 'Math 265', description: 'Calculus 2 - Introduction to Intergration ' },
  // Add more courses as needed
];

export default function Courses() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 28 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {courses.map((course) => (
              <Grid item key={course.id} xs={2} sm={4} md={4}>
                <Item>
                  <CourseCard course={course} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}