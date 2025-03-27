import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid2 as Grid,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; // ไอคอนรูปตา

const ParameterPanel = () => {
  // ตัวอย่างรายการ parameter แบ่งเป็น 3 กลุ่ม (ซ้าย, กลาง, ขวา)
  const parametersLeft = [
    { label: 'Load in', checked: true },
    { label: 'Cumulative', checked: true },
    { label: 'Temp A', checked: true },
    { label: 'Temp B', checked: false },
    { label: 'Density', checked: false },
  ];

  const parametersMiddle = [
    { label: 'DC Current A', checked: false },
    { label: 'Pulse Current A', checked: false },
    { label: 'DC Current B', checked: false },
    { label: 'Pulse Current B', checked: false },
  ];

  const parametersRight = [
    { label: 'ECP Time(sec.)', checked: false },
    { label: 'CP Time(sec.)', checked: false },
    { label: 'Swing(sec.)', checked: false },
    { label: 'Throwing(sec.)', checked: false },
  ];

  return (
    <Paper
      sx={{
        backgroundColor: '#2C2F5A', // พื้นหลังเข้มตามตัวอย่าง
        color: '#fff',              // ตัวอักษรสีขาว
        borderRadius: '16px',
        p: 2,
        width: '100%',
      }}
      elevation={0}
    >
      {/* ส่วนหัวข้อ Parameter + ไอคอนรูปตา */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      </Box>
      {/* Grid 3 คอลัมน์ (ซ้าย, กลาง, ขวา) */}
      <Grid container spacing={3}>
        {/* Column ซ้าย */}
        <Grid item xs={12} sm={4}>
          {parametersLeft.map((param, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  defaultChecked={param.checked}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#00c853', // สีติ๊กถูก (สามารถปรับได้)
                    },
                  }}
                />
              }
              label={param.label}
              sx={{
                // ปรับสี label เป็นสีขาว
                '& .MuiFormControlLabel-label': {
                  color: '#fff',
                },
                display: 'block', // ให้เรียงลงคนละบรรทัด
                mb: 0.5,
              }}
            />
          ))}
        </Grid>

        {/* Column กลาง */}
        <Grid item xs={12} sm={4}>
          {parametersMiddle.map((param, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  defaultChecked={param.checked}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#00c853',
                    },
                  }}
                />
              }
              label={param.label}
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: '#fff',
                },
                display: 'block',
                mb: 0.5,
              }}
            />
          ))}
        </Grid>

        {/* Column ขวา */}
        <Grid item xs={12} sm={4}>
          {parametersRight.map((param, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  defaultChecked={param.checked}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#00c853',
                    },
                  }}
                />
              }
              label={param.label}
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: '#fff',
                },
                display: 'block',
                mb: 0.5,
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ParameterPanel;
