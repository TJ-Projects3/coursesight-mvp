// src/app/CourseCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, List, ListItem, ListItemText, TextField, Rating } from '@mui/material';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

export default function CourseCard({ course, videoUrl, testimonials, professors }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const { user } = useUser();

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
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
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
                  <Typography variant="body2" color="text.secondary">
                    Please sign in to add a comment.
                  </Typography>
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