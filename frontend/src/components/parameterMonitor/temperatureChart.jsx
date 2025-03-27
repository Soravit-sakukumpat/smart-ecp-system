import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// ตัวอย่างข้อมูล (แทนที่ด้วยข้อมูลจริงได้)
const data = [
  { date: '01-27-2025', c1a: 85, c1b: 84, c2a: 87, c2b: 85, c3a: 86, c3b: 85, max: 90, min: 80 },
  { date: '01-27-2025', c1a: 86, c1b: 85, c2a: 86, c2b: 84, c3a: 87, c3b: 86, max: 90, min: 80 },
  { date: '01-27-2025', c1a: 85, c1b: 85, c2a: 86, c2b: 85, c3a: 88, c3b: 84, max: 90, min: 80 },
  { date: '01-27-2025', c1a: 86, c1b: 86, c2a: 88, c2b: 87, c3a: 86, c3b: 85, max: 90, min: 80 },
  { date: '01-27-2025', c1a: 85, c1b: 85, c2a: 87, c2b: 86, c3a: 85, c3b: 86, max: 90, min: 80 },
  { date: '01-27-2025', c1a: 86, c1b: 85, c2a: 86, c2b: 85, c3a: 87, c3b: 87, max: 90, min: 80 },
];

export default function TemperatureChart() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 2,
          backgroundColor: '#1B1E4B', // พื้นหลังโทนเข้ม
          borderRadius: '16px',
          color: '#fff',
          width: '80vh',
        }}
      >
        {/* หัวข้อกราฟ */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Temperature (C)
        </Typography>

        {/* ส่วนของ Recharts */}
        <Box sx={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 30, right: 20, left: 20, bottom: 0 }}
            >
              {/* ตารางเส้นหลัง (Grid) */}
              <CartesianGrid strokeDasharray="3 3" stroke="#4f5473" />
              {/* แกน X */}
              <XAxis
                dataKey="date"
                stroke="#fff"
                tick={{ fill: '#fff', fontSize: 12 }}
              />
              {/* แกน Y */}
              <YAxis
                domain={[20, 100]}
                stroke="#fff"
                tick={{ fill: '#fff', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#2C2F5A',
                  borderRadius: 8,
                  border: 'none',
                }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                verticalAlign="top"
                wrapperStyle={{
                  color: '#fff',
                  marginTop: '-25px',
                  fontSize: '0.85rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />

              {/* C1-A */}
              <Line
                type="monotone"
                dataKey="c1a"
                name="C1-A"
                stroke="#2fffe9"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* C1-B */}
              <Line
                type="monotone"
                dataKey="c1b"
                name="C1-B"
                stroke="#00d0ff"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* C2-A */}
              <Line
                type="monotone"
                dataKey="c2a"
                name="C2-A"
                stroke="#5cf441"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* C2-B */}
              <Line
                type="monotone"
                dataKey="c2b"
                name="C2-B"
                stroke="#ffc400"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* C3-A */}
              <Line
                type="monotone"
                dataKey="c3a"
                name="C3-A"
                stroke="#fa5ce3"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* C3-B */}
              <Line
                type="monotone"
                dataKey="c3b"
                name="C3-B"
                stroke="#ff5c5c"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* MAX */}
              <Line
                type="monotone"
                dataKey="max"
                name="MAX"
                stroke="#f73378"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {/* MIN */}
              <Line
                type="monotone"
                dataKey="min"
                name="MIN"
                stroke="#ff80ab"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* ส่วนสถานะด้านล่าง แบบ "ECP C1 : Normal" */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#3aa56a', // เขียว
                color: '#fff',
                px: 2,
                py: 0.5,
                borderRadius: '8px',
              }}
            >
              ECP C1 :&nbsp;
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Normal
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#ff5c5c', // แดง
                color: '#fff',
                px: 2,
                py: 0.5,
                borderRadius: '8px',
              }}
            >
              ECP C2 :&nbsp;
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Trigger
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#3aa56a', // เขียว
                color: '#fff',
                px: 2,
                py: 0.5,
                borderRadius: '8px',
              }}
            >
              ECP C3 :&nbsp;
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                Normal
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
