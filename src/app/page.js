import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Button, Container } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export default function Home() {
  return (
    <div
      style={{
        background:"",
        boxShadow: "0 0 40px rgb(241,235,156)",
        width: "850px",
        height: "200px",
        borderRadius: "10px",
        justifyItems: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",  // Stack typography items vertically
        top: "100px",
        position: "absolute",
        left:"325px",
        padding: "20px",  // Add padding for some space inside the container
        textAlign: "center"  // Align text horizontally in the center
      }}
    >
      <Typography
        className="customGradient"
        style={{
          fontFamily: "DotoBold, sans-serif", // Make sure "Doto" matches your CSS font name
          fontSize: "85px",
          color: "yellow",
          textShadow: "0 0 20px rgb(241,235,156)",
        }}
      >
        Coursesight
      </Typography>

      <Container
      style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          justifyItems:"center",
          marginTop:"60px",
          gap:"120px"
      }}
      >
          <Button className="customText" style={{
             fontFamily: "DotoBold, sans-serif", // Make sure "Doto" matches your CSS font name
             fontSize: "35px",
             boxShadow: "0 0 10px rgb(241,235,156)",
             height:"50px",
             textAlign:"center",
          }}>
            ss 
          </Button>

          <Button className="customText" style={{
             fontFamily: "DotoBold, sans-serif", // Make sure "Doto" matches your CSS font name
             fontSize: "35px",
             
          }}>
            ss 
          </Button>
      </Container>
      

    
    </div>
  );
}
2