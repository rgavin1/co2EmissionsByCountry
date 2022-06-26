import React from 'react'
import { Box, Grid, Container } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: "#2dbbff", marginTop: "30px", paddingBottom: "15px" }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Footer Item1</Box>
                            <Box>Footer SubItem1</Box>
                            <Box>Footer SubItem2</Box>
                            <Box>Footer SubItem3</Box>
                            <Box>Footer SubItem4</Box>
                            <Box>Footer SubItem5</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Footer Item2</Box>
                            <Box>Footer SubItem1</Box>
                            <Box>Footer SubItem2</Box>
                            <Box>Footer SubItem3</Box>
                            <Box>Footer SubItem4</Box>
                            <Box>Footer SubItem5</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Footer Item3</Box>
                            <Box>Footer SubItem1</Box>
                            <Box>Footer SubItem2</Box>
                            <Box>Footer SubItem3</Box>
                            <Box>Footer SubItem4</Box>
                            <Box>Footer SubItem5</Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer