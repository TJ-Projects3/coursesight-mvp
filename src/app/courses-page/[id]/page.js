'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import useCourseStore from '../../stores/courseStore';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Rating,
  Paper,
  Divider,
  CircularProgress,
  TextField,
  Button,
  Alert,
  Snackbar
} from '@mui/material';

export default function CourseReviewPage() {
  const { id } = useParams();
  const { user } = useUser();
  const { courses, loading, error, fetchCourses, addComment } = useCourseStore();
  const [comment, setComment] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    if (courses.length === 0) {
      fetchCourses();
    }
  }, [fetchCourses, courses.length]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      setSubmitError('Please enter a comment');
      return;
    }

    try {
      await addComment(id, {
        text: comment.trim(),
        createdAt: new Date().toISOString()
      });
      setComment('');
      setSubmitError('');
      setShowSuccess(true);
    } catch (error) {
      setSubmitError(error.message || 'Failed to add comment');
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
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

  const course = courses.find(c => c._id === id);

  if (!course) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <Alert severity="error">Course not found</Alert>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      
      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4, mt: 8 }}>
        <Grid container spacing={3}>
          {/* Main Content Area */}
          <Grid item xs={12} md={8}>
            {/* Video Section */}
            <Box sx={{ mb: 4 }}>
              <Paper elevation={3}>
                <Box
                  component="iframe"
                  src={course.videoUrl}
                  width="100%"
                  height="600px"
                  sx={{
                    border: 0,
                    borderRadius: '4px 4px 0 0',
                  }}
                />
              </Paper>
            </Box>

            {/* Course Info */}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                {course.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {course.description}
              </Typography>
            </Paper>

            {/* Comments Section */}
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Student Comments
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {course.comments?.length > 0 ? (
                  course.comments.map((comment, index) => (
                    <ListItem 
                      key={index} 
                      divider={index !== course.comments.length - 1}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        borderRadius: 1,
                        mb: 1 
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography 
                            component="div"
                            variant="subtitle2" 
                            color="text.secondary"
                          >
                            {new Date(comment.createdAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </Typography>
                        }
                        secondary={
                          <Typography 
                            component="div"
                            variant="body2"
                            sx={{ mt: 1 }}
                          >
                            {comment.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    <ListItemText 
                      primary={
                        <Typography 
                          component="div" 
                          sx={{ textAlign: 'center', color: 'text.secondary' }}
                        >
                          No comments yet
                        </Typography>
                      }
                    />
                  </ListItem>
                )}
              </List>

              <SignedIn>
                <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    Add a Comment
                  </Typography>
                  <TextField
                    label="Your Comment"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={comment}
                    onChange={handleCommentChange}
                    error={!!submitError}
                    helperText={submitError}
                    sx={{ mb: 2 }}
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleCommentSubmit}
                    disabled={!comment.trim()}
                  >
                    Submit Comment
                  </Button>
                </Box>
              </SignedIn>
              <SignedOut>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Link href="/sign-in" passHref>
                    <Typography 
                      variant="body2" 
                      color="primary" 
                      sx={{ 
                        cursor: 'pointer', 
                        textDecoration: 'underline',
                        '&:hover': {
                          color: 'primary.dark'
                        }
                      }}
                    >
                      Please sign in to add a comment
                    </Typography>
                  </Link>
                </Box>
              </SignedOut>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: '100px' }}>
              <Typography variant="h5" gutterBottom>
                Professor Reviews
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {course.professors?.map((professor, index) => (
                  <ListItem key={index} divider={index !== course.professors.length - 1}>
                    <ListItemText
                      primary={professor.name}
                      secondary={
                        <Rating
                          value={professor.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
      
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        message="Comment added successfully"
      />
    </Box>
  );
} 