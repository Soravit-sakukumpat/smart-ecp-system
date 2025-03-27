import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  styled,
} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

/* ========== 1) สร้าง Card Box ด้านบน ========== */
const TopBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  textAlign: "center",
  color: "#fff",
  padding: "12px 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

// กล่องด้านบนสำหรับ Rectifier แสดงสถานะ "Normal" ในวงกลมสีเขียว
const RectifierBox = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2D3153",
        borderRadius: 2,
        textAlign: "center",
        color: "#fff",
        p: 1,
        border: "2px solid white",
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <Box
        sx={{
          backgroundColor: "green",
          width: 80,
          height: 80,
          borderRadius: "50%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Normal
        </Typography>
      </Box>
    </Box>
  );
};

/* ========== 2) ข้อมูลตัวอย่างกราฟ DI Water / RO Water ========== */
const diData = [
  { name: "01-27-2025", "DI Water": 8, MIN: 4 },
  { name: "01-27-2025", "DI Water": 6, MIN: 4 },
  { name: "01-27-2025", "DI Water": 5, MIN: 4 },
  { name: "01-27-2025", "DI Water": 6.5, MIN: 4 },
  { name: "01-27-2025", "DI Water": 7, MIN: 4 },
  { name: "01-27-2025", "DI Water": 8.2, MIN: 4 },
  { name: "01-27-2025", "DI Water": 7.5, MIN: 4 },
  { name: "01-27-2025", "DI Water": 6, MIN: 4 },
];

const roData = [
  { name: "01-27-2025", "RO Water": 8, MIN: 4 },
  { name: "01-27-2025", "RO Water": 6, MIN: 4 },
  { name: "01-27-2025", "RO Water": 7, MIN: 4 },
  { name: "01-27-2025", "RO Water": 8.5, MIN: 4 },
  { name: "01-27-2025", "RO Water": 9, MIN: 4 },
  { name: "01-27-2025", "RO Water": 8.2, MIN: 4 },
  { name: "01-27-2025", "RO Water": 7.7, MIN: 4 },
  { name: "01-27-2025", "RO Water": 6.5, MIN: 4 },
];

/* ========== 3) คอมโพเนนต์หลัก ========== */
export default function WaterMonitoring() {
  return (
    <Box sx={{ minHeight: "100vh", p: 2 }}>
      {/* 3.1 แถวด้านบน: 5 กล่อง (DI Water, RO Water, Rectifier C1–C3) */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* DI Water */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              backgroundColor: "#00cccc", // สี Cyan เข้ม
              borderRadius: 2,
              color: "#fff",
              p: 1.5,
              textAlign: "center",
              border: "2px solid white",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              DI Water
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              7.43 <span style={{ fontSize: "0.8rem" }}>m^3/h</span>
            </Typography>
          </Box>
        </Grid>

        {/* RO Water */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              backgroundColor: "#e55648", // สีแดงส้ม
              borderRadius: 2,
              color: "#fff",
              p: 1.5,
              textAlign: "center",
              border: "2px solid white",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              RO Water
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              12.57 <span style={{ fontSize: "0.8rem" }}>m^3/h</span>
            </Typography>
          </Box>
        </Grid>

        {/* Rectifier C1, C2, C3 */}
        <Grid item xs={12} sm={4} md={2}>
          <RectifierBox title="Rectifier C1" />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <RectifierBox title="Rectifier C2" />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <RectifierBox title="Rectifier C3" />
        </Grid>
      </Grid>

      {/* 3.2 กราฟ DI Water */}
      <Card
        sx={{
          background: "linear-gradient(to right, #00c6ff, #0072ff)", // ไล่สีฟ้า
          borderRadius: 3,
          mb: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#fff", mb: 2, fontWeight: "bold" }}
          >
            Real time - DI Water Incoming monitoring
          </Typography>
          <LineChart width={600} height={250} data={diData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" domain={[0, 10]} />
            <Tooltip />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line
              type="monotone"
              dataKey="DI Water"
              stroke="#000000"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="DI Water"
            />
            <Line
              type="monotone"
              dataKey="MIN"
              stroke="#ffffff"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="MIN"
            />
          </LineChart>
        </CardContent>
      </Card>

      {/* 3.3 กราฟ RO Water */}
      <Card
        sx={{
          background: "linear-gradient(to right, #f09819, #ff512f)", // ไล่สีส้ม
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#fff", mb: 2, fontWeight: "bold" }}
          >
            Real time - RO Water Incoming monitoring
          </Typography>
          <LineChart width={600} height={250} data={roData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" domain={[0, 10]} />
            <Tooltip />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line
              type="monotone"
              dataKey="RO Water"
              stroke="#ff0099"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="RO Water"
            />
            <Line
              type="monotone"
              dataKey="MIN"
              stroke="#ffffff"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="MIN"
            />
          </LineChart>
        </CardContent>
      </Card>
    </Box>
  );
}
