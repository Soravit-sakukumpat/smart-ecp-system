import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  styled,
  Grid2 as Grid,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

/* =============== 1) สร้าง Progress Bar สองสีในแท่งเดียว =============== */
const MultiColorProgressBar = styled((props) => {
  const { value, ...other } = props;
  const leftover = 100 - value;

  return (
    <Box
      {...other}
      sx={{
        display: "flex",
        width: "100%",
        height: 15,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {/* ส่วนแรก: สีหลัก (เช่น #00ffff) กว้างตาม value% */}
      <Box sx={{ width: `${value}%`, backgroundColor: "#00ffff" }} />
      {/* ส่วนที่เหลือ: สีรอง (เช่น #af42f5) */}
      <Box sx={{ width: `${leftover}%`, backgroundColor: "#af42f5" }} />
    </Box>
  );
})({});

/* =============== 2) ข้อมูล Pie Chart =============== */
const pieData = [
  { name: "Run time", value: 98 },
  { name: "Down time", value: 2 },
];
const pieColors = ["#00ffff", "#4b4e6d"];

/* =============== 3) ข้อมูล Bar Chart =============== */
const downtimeData = [
  { name: "E00 Chemical change", time: 240 },
  { name: "E01 Daily Cleaning", time: 90 },
  { name: "E02 By off product", time: 30 },
  { name: "E03 Repair machine", time: 20 },
  { name: "E04 MTN MC", time: 20 },
  { name: "E05 Machine error", time: 70 },
  { name: "E06 Load error", time: 15 },
  { name: "E07 Water Low", time: 23 },
  { name: "E08 Power trip", time: 45 },
  { name: "E09 Quality Issue", time: 34 },
];

/* =============== 4) Component หลัก =============== */
export default function ECPDashboard() {
  return (
    <Card
      sx={{
        backgroundColor: "#2D3153",
        color: "white",
        borderRadius: 5,
        p: 2,
        minWidth: 650,
      }}
    >
      <CardContent>
        {/* ===== แสดง Progress Bar ของ ECP C1 ===== */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ECP C1
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MultiColorProgressBar value={100} />
            <Typography variant="h6" sx={{ minWidth: 50, textAlign: "right" }}>
              100%
            </Typography>
          </Box>
        </Box>

        {/* ===== แสดง Progress Bar ของ ECP C2 ===== */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ECP C2
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MultiColorProgressBar value={92} />
            <Typography variant="h6" sx={{ minWidth: 50, textAlign: "right" }}>
              92%
            </Typography>
          </Box>
        </Box>

        {/* ===== แสดง Progress Bar ของ ECP C3 ===== */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ECP C3
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MultiColorProgressBar value={94} />
            <Typography variant="h6" sx={{ minWidth: 50, textAlign: "right" }}>
              94%
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          ECP uptime &amp; Downtime
        </Typography>

        {/* ===== แบ่งพื้นที่ Pie (ซ้าย) และ Bar (ขวา) ===== */}
        <Grid container spacing={2}>
          {/* ============ ด้านซ้าย: Pie Chart ============ */}
          <Grid xs={12} md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
                <ReTooltip />
              </PieChart>
            </Box>
            {/* คำอธิบายใต้ Pie */}
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Typography variant="subtitle2">Run time 98%</Typography>
              <Typography variant="subtitle2">Down time 2%</Typography>
            </Box>
          </Grid>

          {/* ============ ด้านขวา: Bar Chart (horizontal) ============ */}
          <Grid xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ECP Downtime Reasons
            </Typography>
            <BarChart
              width={400}
              height={350}
              data={downtimeData}
              layout="vertical" // สำคัญ! เพื่อให้เป็น horizontal bar
              margin={{ left: 10, right: 10, top: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#888" />
              {/* YAxis เป็น category => แสดงชื่อ E00 ... E09 */}
              <YAxis
                dataKey="name"
                type="category"
                stroke="#fff"
                tick={{ fill: "#fff" }}
                width={150}
                // reverse={true} // หากต้องการสลับให้อันแรกอยู่ด้านล่าง เปิดใช้งาน
              />
              {/* XAxis เป็นตัวเลข domain 0..250 */}
              <XAxis
                type="number"
                domain={[0, 250]}
                stroke="#fff"
                tick={{ fill: "#fff" }}
              />
              {/* minPointSize เพื่อให้ value=0 ยังแสดงแท่งเล็ก ๆ */}
              <Bar
                dataKey="time"
                fill="#00ffff"
                name="Total down time (min)"
                barSize={15}
                minPointSize={5}
              />
              <Legend
                wrapperStyle={{ color: "#fff" }}
                formatter={(value) => (
                  <span style={{ color: "#00ffff" }}>{value}</span>
                )}
              />
              <ReTooltip />
            </BarChart>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
