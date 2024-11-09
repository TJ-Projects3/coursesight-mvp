// src/app/CourseCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, List, ListItem, ListItemText } from '@mui/material';

export default function CourseCard({ course, videoUrl, testimonials, professors }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Possible Teachers and Their Ratings</Typography>
              <List>
                {professors.map((professor, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={professor.name} secondary={`Rating: ${professor.rating}`} />
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