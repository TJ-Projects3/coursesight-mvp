import { AppBar, Toolbar, Button, Typography, Image } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar className="nav-bar" position="fixed">
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="\tu-tiger.webp" width="50px"></img>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px'}}>
                        Coursesight
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="/pricing" className="nav-item">Pricing</Button>
                    <Button color="inherit" href="/about" className="nav-item">About</Button>
                    <Button color="inherit" href="/resources" className="nav-item">Resource</Button>
                    <Button color="inherit" href="/contact" className="nav-item">Contact</Button>    
                </div>
            </Toolbar>
        </AppBar>
    )
}
