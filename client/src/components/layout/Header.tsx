import React from 'react'
import { Box, Stack, Grid, Container, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const Header: React.FC = () => {
    return (
        <header>
            <Box sx={{ backgroundColor: "#2dbbff", padding: "15px" }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Stack flexDirection="row" alignItems="center">
                                <LanguageIcon />
                                <Typography variant="h5" component="h1" >World Emissions</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </header>
    )
}

export default Header