import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import Image from 'next/image';

export default function Navbar() {
    return (
        <AppBar sx={{ background: 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)' }} position="fixed">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/Coursesight-Logo.png"
                        alt="Coursesight Course Reviews"
                        width={65}
                        height={40}
                        priority
                        style={{ marginTop: '2px' }}
                    />
                    <Typography component="a" href="/" variant="h6" sx={{ textDecoration: 'none', color: 'black', paddingLeft: '10px', fontWeight: 'bolder' }}>
                        Coursesight
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="/" sx={{ color: 'inherit' }}>Home</Button>
                    <Button color="inherit" href="/#about" sx={{ color: 'inherit' }}>About</Button>
                    <Button color="inherit" href="/#resources" sx={{ color: 'inherit' }}>Resource</Button>
                    <Button color="inherit" href="/#contact" sx={{ color: 'inherit' }}>Contact</Button>
                </div>
                <div>
                    <SignedOut>
                        <Button href="/sign-up" sx={{ mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px', marginLeft: '10px', '&:hover': { backgroundColor: '#e2e2e2' } }}>Sign Up</Button>
                        <Button href="/sign-in" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px', marginLeft: '10px', '&:hover': { backgroundColor: '#1565C0' } }}>Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </Toolbar>
        </AppBar>
    );
}