import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MovieIcon from '@mui/icons-material/Movie';

function ResponsiveAppBar() {
    return (
        <AppBar position="static" style={{ background: "#0E0E15" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <h3><span>< MovieIcon style={{ width: "100px", height: "60px",color:"red" }} />   Movie Hub</span></h3>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
