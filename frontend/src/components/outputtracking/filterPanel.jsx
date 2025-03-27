import React from 'react';
import {
    Paper,
    Grid2 as Grid,
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    InputAdornment
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import IosShareIcon from '@mui/icons-material/IosShare';

const FilterPanel = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: '#2C2F5A', // สีพื้นหลังเข้ม
                borderRadius: '16px',
                p: 2, // ลด padding เพื่อให้ใกล้เคียงกับรูป
            }}
        >
            <Grid container spacing={3}>
                {/* ==================== Row 1 (แถวเดียว) ==================== */}
                {/* (1) Start date */}
                <Grid item xs={12} sm={4} md={2} sx={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" sx={{ color: '#fff', whiteSpace: 'nowrap', mx: 5, my: 3, fontStyle: 'italic', fontWeight: 'bold',}}>
                            Start date :
                        </Typography>
                        <TextField
                            type="date"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                },
                                width: 200, // ปรับความกว้างให้ใกล้เคียงกับรูป
                                '& input:invalid': {
                                    color: 'transparent', // ซ่อน placeholder "mm/dd/yyyy" ที่มากับ type="date"
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonthIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                     {/* (3) End date */}
                
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{ color: '#fff', whiteSpace: 'nowrap', mx: 5, my: 3, fontStyle: 'italic', fontWeight: 'bold',}}>
                            End date :
                        </Typography>
                        <TextField
                            type="date"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                },
                                width: 200,
                                '& input:invalid': {
                                    color: 'transparent', // ซ่อน placeholder "mm/dd/yyyy"
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonthIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
            

                                {/* (5) Machine */}
                          
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{ color: '#fff', whiteSpace: 'nowrap', mx: 5, my: 3, fontStyle: 'italic', fontWeight: 'bold',}}>
                            Machine :
                        </Typography>
                        <TextField
                            select
                            variant="outlined"
                            size="small"
                            defaultValue=""
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                },
                                width: 200,
                            }}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="M001">Machine 1</MenuItem>
                            <MenuItem value="M002">Machine 2</MenuItem>
                        </TextField>
                    </Box>
               

                </Grid>

                {/* (2) Product */}
                <Grid item xs={12} sm={4} md={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: "flex-end"}}>
                    <Typography variant="h5" sx={{ color: '#fff', whiteSpace: 'nowrap', mx: 5, my: 3, fontStyle: 'italic', fontWeight: 'bold',}}>
                            Product :
                        </Typography>
                        <TextField
                            select
                            variant="outlined"
                            size="small"
                            defaultValue=""
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                },
                                width: 200,
                            }}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="P001">Product 1</MenuItem>
                            <MenuItem value="P002">Product 2</MenuItem>
                        </TextField>
                    </Box>

                      {/* (4) Production LOT */}
               
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{ color: '#fff', whiteSpace: 'nowrap', mx: 5, my: 3, fontStyle: 'italic', fontWeight: 'bold',}}>
                            Production LOT :
                        </Typography>
                        <TextField
                            select
                            variant="outlined"
                            size="small"
                            defaultValue=""
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                },
                                width: 200,
                            }}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="L001">Lot 1</MenuItem>
                            <MenuItem value="L002">Lot 2</MenuItem>
                        </TextField>
                    </Box>
          
                </Grid>

               

              



                {/* (6) ปุ่ม Export และ Reset (ซ้อนกันในแนวตั้ง) */}
                <Grid item xs={12} sm={4} md={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mx: 1, my: 3 }}>
                        {/* Export Button (สีเขียว) */}
                        <Button
                            variant="contained"
                            startIcon={<IosShareIcon />}
                            sx={{
                                background: 'linear-gradient(to right, #28a745, #41c060)',
                                color: '#fff',
                                borderRadius: '20px',
                                px: 3,
                                mb: 3,
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: 'linear-gradient(to right, #28a745, #5cd87b)',
                                },
                            }}
                        >
                            EXPORT
                        </Button>
                        {/* Reset Button (สีส้ม) */}
                        <Button
                            variant="contained"
                            startIcon={<AutorenewIcon />}
                            sx={{
                                background: 'linear-gradient(to right, #FFA500, #FFB733)',
                                color: '#fff',
                                borderRadius: '20px',
                                px: 3,
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: 'linear-gradient(to right, #FFA500, #FFC966)',
                                },
                            }}
                        >
                            RESET
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FilterPanel;