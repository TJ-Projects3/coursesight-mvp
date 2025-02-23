import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import Image from 'next/image';

export default function Navbar() {
    return (
        <AppBar className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" position="fixed">
            <Toolbar sx={{justifyContent: "space-between"}}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image
                        src="/Coursesight-Logo.png"
                        alt="Tiger Logo" 
                        width={65}
                        height={40}
                        priority
                        style={{ marginTop: '2px' }}
                    />
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px'}}>
                        Coursesight
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="/" className="nav-item">Home</Button>
                    <Button color="inherit" href="/#about" className="nav-item">About</Button>
                    <Button color="inherit" href="/#resources" className="nav-item">Resource</Button>
                    <Button color="inherit" href="/#contact" className="nav-item">Contact</Button>    
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
