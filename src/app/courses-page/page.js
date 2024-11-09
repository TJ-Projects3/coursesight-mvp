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
    description: 'INTRO TO COMPUTER SCIENCE 1',
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
    description: 'GEN PHYS I; NON CALCULUS-BASED',
    image: 'https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'March 2024', testimonial: 'Fascinating insights into physics.' },
      { student: 'August 2023', testimonial: "Incredibly kind and intelligent man. He really cares about his students. His teaching style was just not helpful for my learning style, thus the rating I gave him. I had to teach myself with Khan academy throughout the entire course. He curved almost every test and made it very hard to fail his class. It's just hard to learn from him imo." },
    ],
    professors: [
      { name: 'James Selway Jr', rating: 5.0 },
      { name: 'Nicolas Kudsieh', rating: 3.2 },
      { name: 'Sergei Zverev', rating: 3.2 },
      
      
    ],
  },
  {
    id: 6,
    title: 'Math 265',
    description: 'ELEMENTARY LINEAR ALGEBRA',
    image: 'https://media.istockphoto.com/id/1567013298/photo/teacher-teaching-it-lesson-at-schol.jpg?s=2048x2048&w=is&k=20&c=EHx-tueFtbt6QHuVbND8aQ70_-PC7oQUFol-KJeJarw=',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'October 2024', testimonial: "Professor Tatyana had us demonstrate our knowledge in front of the class, praised us for good/understanding, acknowledged our efforts, had us practice prerequisite algebra knowledge to make the class easier AND gave us extra credit for it. She was a little strict but it was necessary to get us on track as a class for Calc 3." },
      { student: 'April 2024', testimonial: 'Helped me master integration. It was normally a difficult class. If you do not skip class you will do far better.' },
    ],
    professors: [
      { name: 'Tatyana Sorokina', rating: 3.8 },
      { name: 'Jay Zimmerman', rating: 3.6 },
      { name: 'T Elizabeth Goode', rating: 2.6 },
    ],
  },
  {
    id: 7,
    title: 'Econ 202',
    description: 'MACROECONOMIC PRINCIPLES',
    image: 'https://media.istockphoto.com/id/1460500012/photo/benjamin-franklin-face-on-usd-dollar-banknote-with-red-decreasing-stock-market-graph-chart.jpg?s=1024x1024&w=is&k=20&c=4QbddbbhlO-vKUBq7fd5ozi1j0qmVHY_edUXjVsl6ic=',
    videoUrl: 'https://www.youtube.com/embed/example2',
    testimonials: [
      { student: 'January 2024', testimonial: "Good teachers but super lecture-heavy and will need to take good notes. Only focus on her lecture she doesn't test you on the textbook. She has pop quizzes but are open-note. When studying for her exams what helped me was to study previous questions on the practice test and quizzes. Also allows cheat sheets." },
      { student: 'March 2024', testimonial: 'Had Professor Hazra for both micro and macro. Once you have her you know her style, however she can be very unhelpful when people try to clarify things. Tests and quizzes allow notes, always get 1 point out of 2 for trying the questions in class, overall not hard pass' },
    ],
    professors: [
      { name: 'Sam Leppo II', rating: 4.6 },
      { name: 'Thomas Rhoads', rating: 3.9 },
      { name: 'Megharanji Hazra', rating: 3.7 },
      { name: 'Shantanu Bagchi', rating: 3.5 },
      
    ],
  },
  {
    id: 8,
    title: 'TSEM 102',
    description: 'TOWSON SEMINAR',
    image: 'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=1024x1024&w=is&k=20&c=iCUzJvudLPi2HnpAAzIVVqgQVAlnI9TigkEcXcH2NY4=',
    videoUrl: 'https://www.youtube.com/embed/example3',
    testimonials: [
      { student: 'January 2024', testimonial: "Good teachers but super lecture-heavy and will need to take good notes. Only focus on her lecture she doesn't test you on the textbook. She has pop quizzes but are open-note. When studying for her exams what helped me was to study previous questions on the practice test and quizzes. Also allows cheat sheets." },
      { student: 'March 2024', testimonial: "I don't know what the other reviews are talking about, Korzi is a great guy. Extremely understanding, really wants you to pass his class, and is very clear on what you should be taking notes on (you need to take lot of notes for this class). He goes over the material that will be on his exams & the exams themselves are doable as long as you study." },
      { student: 'March 2024', testimonial: "Letting your mind wander during class will leave you on the back footDr. Korzi doesn't use PowerPoints during lecture, so be extremely attentive to what he is saying, and copy notes fastidiously. A-grade papers and exams require extensive familiarity with the subject matter, but you will leave every class having learned a ton." },
      { student: 'February 2024', testimonial: "Korzi is a great dude! He is probably one of the best professors I've had since ive been here (Im a junior). His lectures flow so well and are extremely informative! TAKE KORZI!" },
      { student: 'December 2023', testimonial: "Lectures were really boring, but this was a pretty easy class. If you paid attention in your High School civics class or watch the news, you will be fine" },
    ],
    professors: [
      { name: 'Elizabeth Gray', rating: 4.3 },
      { name: 'Michael Korzi', rating: 4.2 },
      { name: 'Gretchen Carlson', rating: 3.7 },
      { name: 'Amanda Walter', rating: 3.5 },
      
      { name: 'John Mancini', rating: 3.4 },
      { name: 'Nicole Dombrowski-Risser', rating: 3.3 },
      { name: 'Joseph Rudolph Jr.', rating: 2.8 },
      { name: 'Sel Hwahng', rating: 1.8 },
      
        
    ],
  },
  {
    id: 9,
    title: 'Cis 328',
    description: 'INTRODUCTION TO DATA ANALYTICS',
    image: 'https://media.istockphoto.com/id/2153478836/photo/digital-technology-internet-network-connection-big-data-digital-marketing-iot-internet-of.jpg?s=1024x1024&w=is&k=20&c=ZLIKNbPQbEMb07-eQK1u-j180Q2Nk3zAh6mR3D1U0ZQ=',
    videoUrl: 'https://www.youtube.com/embed/example4',
    testimonials: [
      { student: 'September 2024', testimonial: '1-2 chapters every week, group project, midterm and final. Very kind professor who is extremely passionate about this topic. Clear grading criteria. Group project was a little intense but overall isnt bad. Make sure to study for the exams.' },
      { student: 'October 2024', testimonial: 'Professor Wynkoop was great. She is always quick to answer emails and has such a great attitude coming to class. She truly cares about her students and her work given is adequate for the course and not super time consuming. She gave clear expectations and was a great mentor for future teachers. Loved her energy!' },
    ],
    professors: [
      { name: 'Jinjuan Feng', rating: 4.6 },
      { name: 'Matthew Patrick', rating: 4.5 },
      { name: 'Elizabeth Adeleye', rating: 4.5 },
      
    ],
  },
  {
    id: 10,
    title: 'CIS 458',
    description: 'ORGANIZATIONAL DATABASE MNGT',
    image: 'https://media.istockphoto.com/id/1386672473/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=1024x1024&w=is&k=20&c=2Qpyt5kMPQ_rlijuNVYUJIudj1U-tclvsDOh-4wrv0I=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'August 2024', testimonial: 'Fascinating insights into physics.' },
      { student: 'June 2024', testimonial: 'Highly recommend for physics enthusiasts.' },
    ],
    professors: [
      { name: 'Jinie Pak', rating: 4.8 },
      
    ],
  },
  {
    id: 11,
    title: 'English 317',
    description: 'WRITING BUSINESS & INDUSTRY',
    image: 'https://plus.unsplash.com/premium_photo-1726797964368-fdebed469d0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'January 2024', testimonial: 'A tough but essential course.' },
      { student: 'December 2023', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Jianfen Chen', rating: 4.9 },   
      { name: 'Mark Charney', rating: 4.5 },
    ],
  },
  {
    id: 12,
    title: 'History 101',
    description: 'World History from the Renaissance to Modern Times',
    image: 'https://media.istockphoto.com/id/1268624207/photo/book-education.jpg?s=1024x1024&w=is&k=20&c=qnOiYX_OyK6jE8Y4cMuCWgEsmBIdv5ktuZ4cqzNm5PE=' ,
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'March 2024', testimonial: 'A tough but essential course.' },
      { student: 'Febrruary 2024', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Example Professor', rating: 4.9 },
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

 const filteredCourses = courses
    .filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort courses alphabetically by title

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
    </>
  );
}