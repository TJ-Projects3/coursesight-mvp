// src/app/CourseCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <Card>
      <Link href={`/courses/${course.id}`} passHref>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}