import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <Box 

            component="footer" 
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                background: "#272734",
                color: 'white',
                p: 8,
                mt: 2
            }}
        >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                    <MovieIcon sx={{ width: 40, height: 40, mr: 1 }} /> Movie Hub
                </Typography>
                <Box component="nav" sx={{ mt: 1 }}>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>Home</Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>Blog</Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>Pricing</Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>About</Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>Faq</Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>Contact</Link>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>Company Name © 2015</Typography>
            </Box>

            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 3, md: 0 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <Typography>444 S. Cedros Ave, Solana Beach, California</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Typography>+1.555.555.5555</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 1 }} />
                    <Link href="mailto:support@company.com" color="inherit">support@company.com</Link>
                </Box>
            </Box>

            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 3, md: 0 } }}>
                <Typography variant="body1" fontWeight="bold">The Movie Vault</Typography>
                <Typography variant="body2" sx={{ maxWidth: 300, mt: 1 }}>
                    The Movie Vault is your ultimate destination for movie lovers and
                    film enthusiasts alike. Dive into a vast collection of movies across
                    every genre, era, and style.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
                    <IconButton color="inherit" href="#">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
