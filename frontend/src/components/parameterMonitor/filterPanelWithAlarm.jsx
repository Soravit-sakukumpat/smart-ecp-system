import React from 'react';
import {
  Box,
  Paper,
  Grid2 as Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function FilterPanelWithAlarm() {
  return (
    <Box sx={{ p: 2 }}>
      {/* กล่อง Filter หลัก */}
      <Paper
        sx={{
          backgroundColor: '#2C2F5A',
          borderRadius: '16px',
          color: '#fff',
          p: 2,
          mb: 2,
        }}
      >
        <Grid container spacing={4}>
          {/* Row 1 */}
          <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column" ,justifyContent: "flex-end", alignItems: "flex-end"}}>
            {/* Start date (label + field) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2  }}>
              <Typography sx={{ whiteSpace: 'nowrap' }}>Start date :</Typography>
              <TextField
                type="date"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                  },
                  width: 200, // กำหนดความกว้างตามต้องการ
                }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <CalendarMonthIcon sx={{ mr: 1, color: '#999' }} />
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2  }}>
              <Typography sx={{ whiteSpace: 'nowrap' }}>End date :</Typography>
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

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2  }}>
              <Typography sx={{ whiteSpace: 'nowrap' }}>Machine :</Typography>
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
                <MenuItem value="">Select Machine</MenuItem>
                <MenuItem value="M001">Machine 1</MenuItem>
                <MenuItem value="M002">Machine 2</MenuItem>
              </TextField>
            </Box>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={3} spacing={2} sx={{ display: "flex", flexDirection: "column" ,justifyContent: "flex-end", alignItems: "flex-end"}}>
            {/* Start time (label + select) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
              <Typography sx={{ whiteSpace: 'nowrap' }}>Start time :</Typography>
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
                <MenuItem value="">Select time</MenuItem>
                <MenuItem value="08:00">08:00</MenuItem>
                <MenuItem value="09:00">09:00</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2  }}>
              <Typography sx={{ whiteSpace: 'nowrap' }}>End time :</Typography>
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
                <MenuItem value="">Select time</MenuItem>
                <MenuItem value="16:00">16:00</MenuItem>
                <MenuItem value="17:00">17:00</MenuItem>
              </TextField>
            </Box>

                      {/* Temperature, Density (checkbox) */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2  }}>
            <FormControlLabel
              control={<Checkbox sx={{ color: '#fff' }} />}
              label={<Typography sx={{ color: '#fff' }}>Temperature</Typography>}
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: '#fff' }} />}
              label={<Typography sx={{ color: '#fff' }}>Density</Typography>}
            />
          </Grid>

            
          </Grid>




              {/* ปุ่ม Reset + Export (วางในคอลัมน์เดียวกัน) */}
              <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', gap: 1, mx: 5 }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #FFA500, #FFB733)',
                color: '#fff',
                borderRadius: '20px',
                width: '100%',
                '&:hover': {
                  background: 'linear-gradient(to right, #FFA500, #FFC966)',
                },
                fontWeight: 'bold',
                my: 2 
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
                width: '100%',
                '&:hover': {
                  background: 'linear-gradient(to right, #28a745, #5cd87b)',
                },
                fontWeight: 'bold'
                ,my: 2 
              }}
            >
              Export
            </Button>
          </Grid>

        </Grid>
      </Paper>

      {/* แถบแจ้งเตือน/Alarm + ปุ่ม Action */}
      <Paper
        sx={{
          p: 1,
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#333',
          backgroundColor: '#fff',
        }}
      >
        {/* ซ้าย: Icon + ข้อความ */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <NotificationsActiveIcon sx={{ color: '#ff4e4e', fontSize: '2rem' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ECP C1 : Temperature tank A out spec.
          </Typography>
        </Box>

        {/* ขวา: ปุ่ม Action */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d9534f',
            color: '#fff',
            borderRadius: '20px',
            px: 3,
            '&:hover': {
              backgroundColor: '#e26c69',
            },
          }}
        >
          Action
        </Button>
      </Paper>
    </Box>
  );
}
