'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useCourseStore from '../stores/courseStore';

export default function CreateCoursePage() {
  const router = useRouter();
  const { createCourse } = useCourseStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    videoUrl: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(formData);
      router.push('/courses-page');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 12, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create New Course
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              name="title"
              label="Course Title"
              required
              fullWidth
              value={formData.title}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="description"
              label="Course Description"
              required
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              required
              fullWidth
              value={formData.image}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="videoUrl"
              label="Video URL"
              required
              fullWidth
              value={formData.videoUrl}
              onChange={handleChange}
              margin="normal"
            />
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Create Course
              </Button>
              <Button
                variant="outlined"
                onClick={() => router.push('/courses-page')}
                size="large"
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}