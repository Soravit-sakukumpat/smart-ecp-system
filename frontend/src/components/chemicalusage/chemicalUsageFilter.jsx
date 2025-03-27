import React from 'react';
import {
  Box,
  Paper,
  Grid2 as Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScienceIcon from '@mui/icons-material/Science';

export default function ChemicalUsageFilter() {
  return (
    <Box sx={{ p: 2, width: '100vh' }}>
      {/* Title + Icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1}}>
        <ScienceIcon sx={{ fontSize: 40 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontStyle: "italic" }}>
          Chemical usage Monitoring
        </Typography>
      </Box>

      <Paper
        sx={{
          p: 2,
          borderRadius: '16px',
          backgroundColor: '#2C2F5A',
          color: '#fff',
        }}
      >
        <Grid container spacing={2} >
          {/* Row 1 */}
          <Grid item xs={12} md={3} lg={4} sx={{ display:"flex", flexDirection:"column", alignItems:"flex-end", my: 2}}>
            {/* Start date : Label + Field */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
              <Typography variant="h5"sx={{ whiteSpace: 'nowrap', fontWeight: 'bold',fontStyle:"italic" }}>
                Start date :
              </Typography>
              <TextField
                type="date"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                  },
                  width: 200,
                }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <CalendarMonthIcon sx={{ mr: 1, color: '#999' }} />
                  ),
                }}
              />
            </Box>

            {/* Machine : Label + Field */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
            <Typography variant="h5"sx={{ whiteSpace: 'nowrap', fontWeight: 'bold',fontStyle:"italic" }}>
                Machine :
              </Typography>
              <TextField
                select
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
                <MenuItem value="">Select machine</MenuItem>
                <MenuItem value="M001">Machine 1</MenuItem>
                <MenuItem value="M002">Machine 2</MenuItem>
              </TextField>
            </Box>
       
          </Grid>

          <Grid item xs={12} md={3} lg={4} sx={{ display:"flex", flexDirection:"column", alignItems:"flex-end", my: 2}}>
            {/* To : Label + Field */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
            <Typography variant="h5"sx={{ whiteSpace: 'nowrap', fontWeight: 'bold',fontStyle:"italic" }}>
                To
              </Typography>
              <TextField
                select
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
                <MenuItem value="">Select date</MenuItem>
                <MenuItem value="2025-01-01">2025-01-01</MenuItem>
                <MenuItem value="2025-02-01">2025-02-01</MenuItem>
              </TextField>
            </Box>

            {/* Categories : Label + Field */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
            <Typography variant="h5"sx={{ whiteSpace: 'nowrap', fontWeight: 'bold',fontStyle:"italic" }}>
                Categories :
              </Typography>
              <TextField
                select
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
                <MenuItem value="">Select categories</MenuItem>
                <MenuItem value="CatA">Category A</MenuItem>
                <MenuItem value="CatB">Category B</MenuItem>
              </TextField>
            </Box>


          </Grid>

          

          
          {/* Row 2 : ปุ่ม Reset / Export */}
          <Grid item xs={12} md={3} lg={4} sx={{ display:"flex", flexDirection:"column", alignContent:"flex-end", ml:5, my: 1}}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #FFA500, #FFB733)',
                color: '#fff',
                borderRadius: '20px',
                px: 3,
                my: 3,
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(to right, #FFA500, #FFC966)',
                },
              }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #28a745, #41c060)',
                color: '#fff',
                borderRadius: '20px',
                px: 3,
                my: 2,
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(to right, #28a745, #5cd87b)',
                },
              }}
            >
              Export
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
