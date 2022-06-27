import React from 'react'
import { Box, Grid, Container } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: "#2dbbff", marginTop: "30px", paddingBottom: "15px" }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Contact</Box>
                            <Box>Email</Box>
                            <Box>Resume</Box>
                            <Box>Github</Box>
                            <Box>Website</Box>
                            <Box>LinkedIn</Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer