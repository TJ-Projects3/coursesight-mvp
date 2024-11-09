import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { AppBar, Toolbar, Button, Typography, Image } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar className="nav-bar" position="fixed">
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="\tu-tiger.webp" width="50px"></img>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px'}}>
                        Coursesight
                    </Typography>
                </div>
                <div>
                    <Button color="black" href="/about" className="nav-item">About</Button>
                    <Button color="black" href="/resources" className="nav-item">Resource</Button>
                    <Button color="black" href="/contact" className="nav-item">Contact</Button>    
                </div>
                <div>
                    <SignedOut>
                        <Button color="inherit" href="/sign-up" className="button-white" sx={{ mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#e2e2e2',}, }}>Sign Up</Button>
                        <Button color="inherit" href="/sign-in" className="button-blue" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />  
                    </SignedIn>
                </div>
            </Toolbar>
        </AppBar>
    )
}
