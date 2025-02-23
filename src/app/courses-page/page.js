// src/app/courses.js
'use client';
import React, { useState, useEffect } from 'react';
import CourseCard from './components/CourseCard';
import { Container, TextField, Box, Grid, Typography, CircularProgress, Alert, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useCourseStore from '../stores/courseStore';
import { SignedIn } from '@clerk/nextjs';
import { SignedOut } from '@clerk/clerk-react';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Courses() {
  const { courses, loading, error, fetchCourses } = useCourseStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Fetching courses...');
    fetchCourses();
  }, [fetchCourses]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses
    .filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <Alert severity="error">Error: {error}</Alert>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 12 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          Available Courses
        </Typography>
        <SignedOut>
          <Button href="/sign-in">
            Sign in to add a course
          </Button>
        </SignedOut>
        <SignedIn>
        <Button 
          className='bg-color bg-pink-500' 
          variant="contained" 
          color="primary" 
          href="/create-course"
        >
          Add Course
        </Button>
        </SignedIn>
        </Box>
        <TextField
          label="Search Courses"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mb: 4 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} mb={12}>
            {filteredCourses.map((course) => (
              <Grid item key={course._id} xs={2} sm={4}>
                <Item>
                  <CourseCard course={course} />
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