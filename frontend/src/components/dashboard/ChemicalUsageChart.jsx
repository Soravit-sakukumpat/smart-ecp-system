import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ข้อมูลสำหรับกราฟ (อิงจากรูปภาพ)
const data = [
  {
    name: "ECP1",
    "Chemical Change": 330,
    "Daily Top-Up": 510,
    "Cumulative 30,000 Amp/Hr.(L)": 1060,
  },
  {
    name: "ECP2",
    "Chemical Change": 580,
    "Daily Top-Up": 90,
    "Cumulative 30,000 Amp/Hr.(L)": 380,
  },
  {
    name: "ECP3",
    "Chemical Change": 490,
    "Daily Top-Up": 120,
    "Cumulative 30,000 Amp/Hr.(L)": 210,
  },
];

// สีสำหรับแต่ละชั้น
const COLORS = {
  "Chemical Change": "#00C49F", // ฟ้าอ่อน
  "Daily Top-Up": "#00B7EB", // ฟ้าเข้ม
  "Cumulative 30,000 Amp/Hr.(L)": "#8884D8", // ม่วง
};

function ChemicalUsageChart() {
  return (
    <Card
      sx={{
        backgroundColor: "#2b2d42",
        color: "#fff",
        borderRadius: 2,
        width: "430px",
        height: "655px", // ความสูงขึ้นอยู่กับคอนเทนเนอร์แม่
        display: "flex",
        flexDirection: "column", // ทำให้คอนเทนต์ใน Card จัดเรียงในแนวตั้ง
        mx: 1
      }}
    >
      <CardContent
        sx={{
          flex: 1, // ให้ CardContent ขยายเต็มความสูงที่เหลือของ Card
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          CHEMICAL USAGE (Liter)
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}> {/* ให้ Box ขยายเต็มที่และป้องกัน overflow */}
          <ResponsiveContainer width="90%" height="99%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" domain={[0, 2000]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#2b2d42", border: "none", color: "#fff" }}
                formatter={(value) => `${value} Liter`}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ color: "#fff", marginBottom: 5 }}
              />
              <Bar dataKey="Chemical Change" stackId="a" fill={COLORS["Chemical Change"]} />
              <Bar dataKey="Daily Top-Up" stackId="a" fill={COLORS["Daily Top-Up"]} />
              <Bar
                dataKey="Cumulative 30,000 Amp/Hr.(L)"
                stackId="a"
                fill={COLORS["Cumulative 30,000 Amp/Hr.(L)"]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ChemicalUsageChart;