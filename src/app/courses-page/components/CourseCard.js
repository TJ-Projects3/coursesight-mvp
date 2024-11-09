// src/app/CourseCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, CardMedia } from '@mui/material';
import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
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
      <Link href={`/courses/${course.id}`} passHref>
        <CardActionArea>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={course.image} // Ensure course object has an image property
              alt={course.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Link>
    </Box>
  );
}