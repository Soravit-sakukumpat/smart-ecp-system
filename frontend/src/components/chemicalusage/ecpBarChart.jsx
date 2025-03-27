import React from 'react';
import {
  Box,
  Paper,
  Typography
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// ตัวอย่างข้อมูล สมมุติ
const data = [
  { date: '29/01/2025', c1: 300, c2: 200, c3: 100 },
  { date: '29/01/2025', c1: 450, c2: 250, c3: 80  },
  { date: '29/01/2025', c1: 500, c2: 150, c3: 150 },
  { date: '29/01/2025', c1: 200, c2: 100, c3: 80  },
  { date: '29/01/2025', c1: 600, c2: 350, c3: 120 },
  { date: '29/01/2025', c1: 400, c2: 200, c3: 50  },
];

export default function ECPBarChart() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 2,
          borderRadius: '16px',
          backgroundColor: 'rgba(44, 47, 90, 0.7)',
          color: '#fff',
          width: "75vh"
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
        >
          ECP Usage (Liter)
        </Typography>

        {/* Recharts Container */}
        <Box sx={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid stroke="#4f5473" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
              <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#2C2F5A', borderRadius: 8, border: 'none' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend
                verticalAlign="top"
                iconType="circle"
                wrapperStyle={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  marginTop: '-10px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />

              {/* แท่ง 1: Liter ECP C1 */}
              <Bar
                dataKey="c1"
                name="Liter ECP C1"
                fill="#00d0ff"
                barSize={20}
              />
              {/* แท่ง 2: Liter ECP C2 */}
              <Bar
                dataKey="c2"
                name="Liter ECP C2"
                fill="#2fffe9"
                barSize={20}
              />
              {/* แท่ง 3: Liter ECP C3 */}
              <Bar
                dataKey="c3"
                name="Liter ECP C3"
                fill="#fa5ce3"
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  );
}
