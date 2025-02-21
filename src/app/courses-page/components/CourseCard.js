// src/app/CourseCard.js
'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  CardMedia,
} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function CourseCard({ course }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses-page/${course._id}`);
  };

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
        maxWidth: '100%',
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Card sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: 340,
          width: '100%',
        }}>
          <Box sx={{ 
            height: 180,
            width: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <CardMedia
              component="img"
              image={course.image}
              alt={course.title}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <CardContent sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            gap: 1,
            height: 160,
          }}>
            <Typography 
              gutterBottom 
              variant="h6" 
              component="div"
              sx={{
                height: '2.4em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.2em',
                marginBottom: 0.5,
              }}
            >
              {course.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                flexGrow: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.5em',
              }}
            >
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box>
  );
}