'use client';

import { useChat } from 'ai/react';
import React, { useState, useRef } from "react";

import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import Navbar from './Navbar';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });


  return (
    <div>
    <Box
    sx={{
      backgroundImage: 'linear-gradient(90deg, #D9A7C7, #FFFCDC)',
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      overflow: "scroll",
    }}
    >
    <Navbar></Navbar>
      <Typography variant='h2' fontWeight={'500'} display={'inline'} textAlign={'center'}  sx={{
    background: 'black',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mt: 12,
  }}>
        Study Buddy
      </Typography>
      <Stack width={"500px"} height={"700px"} bgcolor={'white'} border={'20px shadow black'} borderRadius={'50px'} overflow={'auto'} spacing={2} textAlign={'center'} padding={"50px"} paddingTop={"20px"}>
        {messages.map(message => (
            <div key={message.id}>
            <Box sx={{borderRadius:'25px', background:'linear-gradient(90deg, #D9A7C7, #FFFCDC)', backgroundRepeat:'no-repeat', border:'5px', padding: '20px'}}>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
            </Box>
          </div>

        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        <TextField name="prompt" placeholder='Type prompt here...' value={input}  onChange={handleInputChange} sx={{bgcolor: 'white', marginBottom:'10px', minHeight: '20px'}}/>
        <Button type='submit' variant="contained" sx={{bgcolor: 'hotpink', marginLeft:'20px','&:hover': {backgroundColor: 'purple', color: 'black'}}}>
          Submit
        </Button>
      </form>
      </Box>
      </div>
    
  );
}