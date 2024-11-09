// src/app/CourseCard.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, List, ListItem, ListItemText, TextField, Rating } from '@mui/material';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import Link from 'next/link';

export default function CourseCard({ course, videoUrl, testimonials, professors }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    // Load comments from localStorage when the component mounts
    const storedComments = JSON.parse(localStorage.getItem(`comments-${course.id}`)) || [];
    setComments(storedComments);

    // Add event listener to clear local storage on page reload
    const handleBeforeUnload = () => {
      localStorage.removeItem(`comments-${course.id}`);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [course.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Get the current month and year
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const formattedDate = `${month} ${year}`;

    // Save the comment to localStorage
    const newComments = [...comments, { user: formattedDate, text: comment }];
    setComments(newComments);
    localStorage.setItem(`comments-${course.id}`, JSON.stringify(newComments));
    setComment('');
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
          },
          backgroundColor: 'background.paper',
          height: '100%',
        }}
      >
        <CardActionArea onClick={handleClickOpen}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={course.image} // Ensure course object has an image property
              alt={course.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{course.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box sx={{ mb: 2 }}>
                <Box component="iframe" src={videoUrl} width="100%" height="315" />
                <Typography variant="h6" sx={{ mt: 2 }}>Student Testimonials</Typography>
                <List>
                  {testimonials.map((testimonial, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={testimonial.student} secondary={testimonial.testimonial} />
                    </ListItem>
                  ))}
                  {comments.map((comment, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={comment.user} secondary={comment.text} />
                    </ListItem>
                  ))}
                </List>
                <SignedIn>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">Add a Comment</Typography>
                    <TextField
                      label="Your Comment"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={comment}
                      onChange={handleCommentChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
                      Submit
                    </Button>
                  </Box>
                </SignedIn>
                <SignedOut>
                  <Link href="/sign-in" passHref>
                    <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                      Please sign in to add a comment.
                    </Typography>
                  </Link>
                </SignedOut>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6">Professors</Typography>
              </Box>
              <List>
                {professors.map((professor, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={professor.name} />
                    <Rating value={professor.rating} precision={0.1} readOnly />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}