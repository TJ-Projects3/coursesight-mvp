import { SignUp } from "@clerk/nextjs";
import { Container, Box, Typography } from "@mui/material";
import Navbar from '../../components/Navbar';

export default function Login() {
    return (
        <Container maxWidth='sm'>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", my: 4 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign up
        </Typography>
        <SignUp></SignUp>
      </Box>
    </Container>
    )
}