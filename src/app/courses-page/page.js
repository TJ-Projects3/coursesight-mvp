// src/app/courses.js
'use client';
import React, { useState } from 'react';
import CourseCard from './components/CourseCard';
import { Container, TextField } from '@mui/material';
import { experimentalStyled as styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const courses = [
  {
    id: 1,
    title: 'Chemistry 121',
    description: 'ALLIED HEALTH CHEM I LECTURE',
    image: 'https://media.istockphoto.com/id/1488859284/photo/plants-test-tube-and-science-woman-with-research-exam-and-solution-for-leaves-in-laboratory.jpg?s=2048x2048&w=is&k=20&c=fzhyHckXs8fBEwIqPXlQWPf9z-HdqAq0VYIaaRZPQGI=',
    videoUrl: 'https://www.youtube.com/embed/example1',
    testimonials: [
      { student: 'October 2024', testimonial: "Professor Shital Vaidya a nice and okay professor and all of his assignments are easy but he's a tough grader. I never received a perfect score on any assignment. His lectures are so boring and sometimes he randomly calls on people to participate. He also has an accent so sometimes I don't know what he's saying. I would say take his class just for the credit." },
      { student: 'March 2024', testimonial: 'I learned so much from this course. If you want the best experience, take Professor Nicole' },
    ],
    professors: [
      { name: 'Nicole Carbonaro', rating: 3.8 },
      { name: 'Shital Vaidya', rating: 2.6 },
    ],
  },
  {
    id: 2,
    title: 'Biology 210',
    description: 'MEDICAL TERMINOLOGY',
    image: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/embed/example2',
    testimonials: [
      { student: 'September 2024', testimonial: 'Great course!' },
      { student: 'May 2024', testimonial: "Super easy class, the first unit is available the first day so you can do all of it. The work is tedious but it's just McGraw Hill. I would recommend this class." },
    ],
    professors: [
      { name: 'Stella Evans', rating: 3.9 },
      { name: 'Cheryl Warren', rating: 3.9 },
      { name: 'Charlotte Saylor', rating: 3.4 },
      
    ],
  },
  {
    id: 3,
    title: 'Math 330',
    description: 'INTRO TO STATISTICAL METHODS',
    image: 'https://media.istockphoto.com/id/640129130/photo/business-person-standing-in-front-of-mathematical-formula.jpg?s=2048x2048&w=is&k=20&c=JTJzB9uKIV0abkVODnPv4h-j1gnfOtIvk56Zs1dw0z0=',
    videoUrl: 'https://www.youtube.com/embed/example3',
    testimonials: [
      { student: 'May 2024', testimonial: 'Very challenging but rewarding. Professor Banghee So was very helpful in breaking the concepts down. I would reccommend her' },
      { student: 'August 2024', testimonial: 'Helped me understand statistics better.' },
    ],
    professors: [
      { name: 'Banghee So', rating: 4.9 },
      { name: 'Min Deng', rating: 4.3 },
      { name: 'Mostafa Aminzadeh', rating: 2.9 },
      
    ],
  },
  {
    id: 4,
    title: 'Cosc 236',
    description: 'Introduction to computer science 1',
    image: 'https://media.istockphoto.com/id/1461146736/photo/close-up-of-laptop-computer-on-desk-with-glowing-globe-hologram-on-blurry-background-internet.jpg?s=2048x2048&w=is&k=20&c=Pbq3Q_mkZentJy4M1kzdhBONste4CfSXcqI-mqIhw5g=',
    videoUrl: 'https://www.youtube.com/embed/example4',
    testimonials: [
      { student: 'October 2024', testimonial: "You have to pay attention or you will fall behind in class, unless you've mastered data structures and algorithms you will suffer. Other than that he allows you to use ANYTHING for exams/quizes as long as you site your sources if its something off of the internet." },
      { student: 'May 2024', testimonial: 'Loved the hands-on projects.' },
      { student: 'December 2023', testimonial: " very important that you get a good partner, because you'll be working with them for labs, quizzes and exams. Only two homework assignments where you work independently, but those two assignments cover a lot of material. Learned a lot in the class, but it was more from reading PowerPoints than from the lectures." },
    ],
    professors: [
      { name: 'Nadim Alkharouf', rating: 4.4 },
      { name: 'Dastyni Loksa', rating: 3.5 },
      { name: 'Nam Nguyen', rating: 3 },
      { name: 'Wassila Lalouani', rating: 2.9 },  
    ],
  },
  {
    id: 5,
    title: 'Physics 320',
    description: 'The theory of computational physics in our world today',
    image: 'https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'Student I', testimonial: 'Fascinating insights into physics.' },
      { student: 'Student J', testimonial: 'Highly recommend for physics enthusiasts.' },
    ],
    professors: [
      { name: 'Professor I', rating: 4.8 },
      { name: 'Professor J', rating: 4.4 },
    ],
  },
  {
    id: 6,
    title: 'Math 265',
    description: 'Calculus 2 - Introduction to Integration',
    image: 'https://media.istockphoto.com/id/696935130/photo/complex-math-formulas-on-whiteboard-mathematics-and-science-with-economics.jpg?s=2048x2048&w=is&k=20&c=pu5FyP-VM0Y8Hb3qNQWPRSyEZgTx_RV8CHBo8OmwSjY=',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  {
    id: 7,
    title: 'Biology 121',
    description: 'Introduction to Human biology',
    image: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/embed/example2',
    testimonials: [
      { student: 'Student C', testimonial: 'Great course!' },
      { student: 'Student D', testimonial: 'Very informative.' },
    ],
    professors: [
      { name: 'Professor C', rating: 4.2 },
      { name: 'Professor D', rating: 3.8 },
    ],
  },
  {
    id: 8,
    title: 'Math 330',
    description: 'Statistical methods for computer science',
    image: 'https://media.istockphoto.com/id/640129130/photo/business-person-standing-in-front-of-mathematical-formula.jpg?s=2048x2048&w=is&k=20&c=JTJzB9uKIV0abkVODnPv4h-j1gnfOtIvk56Zs1dw0z0=',
    videoUrl: 'https://www.youtube.com/embed/example3',
    testimonials: [
      { student: 'Student E', testimonial: 'Very challenging but rewarding.' },
      { student: 'Student F', testimonial: 'Helped me understand statistics better.' },
    ],
    professors: [
      { name: 'Professor E', rating: 4.7 },
      { name: 'Professor F', rating: 4.3 },
    ],
  },
  {
    id: 9,
    title: 'Cosc 235',
    description: 'Introduction to computer science 2',
    image: 'https://media.istockphoto.com/id/1461146736/photo/close-up-of-laptop-computer-on-desk-with-glowing-globe-hologram-on-blurry-background-internet.jpg?s=2048x2048&w=is&k=20&c=Pbq3Q_mkZentJy4M1kzdhBONste4CfSXcqI-mqIhw5g=',
    videoUrl: 'https://www.youtube.com/embed/example4',
    testimonials: [
      { student: 'Student G', testimonial: 'Great introduction to advanced topics.' },
      { student: 'Student H', testimonial: 'Loved the hands-on projects.' },
    ],
    professors: [
      { name: 'Professor G', rating: 4.6 },
      { name: 'Professor H', rating: 4.1 },
    ],
  },
  {
    id: 10,
    title: 'Physics 320',
    description: 'The theory of computational physics in our world today',
    image: 'https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'Student I', testimonial: 'Fascinating insights into physics.' },
      { student: 'Student J', testimonial: 'Highly recommend for physics enthusiasts.' },
    ],
    professors: [
      { name: 'Professor I', rating: 4.8 },
      { name: 'Professor J', rating: 4.4 },
    ],
  },
  {
    id: 11,
    title: 'Math 265',
    description: 'Calculus 2 - Introduction to Integration',
    image: 'https://media.istockphoto.com/id/696935130/photo/complex-math-formulas-on-whiteboard-mathematics-and-science-with-economics.jpg?s=2048x2048&w=is&k=20&c=pu5FyP-VM0Y8Hb3qNQWPRSyEZgTx_RV8CHBo8OmwSjY=',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  {
    id: 12,
    title: 'History 101',
    description: 'World History from the Renaissance to Modern Times',
    image: '' ,
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  // Add more courses as needed
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 12 }}>
        <TextField
          label="Search Courses"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
            input: {
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
              '&:hover fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filteredCourses.map((course) => (
              <Grid item key={course.id} xs={2} sm={4} md={4}>
                <Item>
                  <CourseCard
                    course={course}
                    videoUrl={course.videoUrl}
                    testimonials={course.testimonials}
                    professors={course.professors}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}