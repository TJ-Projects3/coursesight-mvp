'use client'
import Image from "next/image";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Box width={'100vw'} height={'100vh'}>
          <Navbar></Navbar>
    </Box>
  );
}
