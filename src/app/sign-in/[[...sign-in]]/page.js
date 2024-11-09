import { SignIn } from "@clerk/nextjs";
import { Container, Box, Typography } from "@mui/material";

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
          Sign in
        </Typography>
        <SignIn></SignIn>
      </Box>
    </Container>
    )
}