import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  {
    date: "01-27-2025",
    ecpc1: 25,
    ecpc2: 20,
    ecpc3: 18,
    max: 30,
    min: 10,
    ecpc1Total: 33800,
    ecpc2Total: 380,
    ecpc3Total: 18000,
  },
  {
    date: "01-27-2025",
    ecpc1: 22,
    ecpc2: 18,
    ecpc3: 16,
    max: 30,
    min: 10,
  },
  {
    date: "01-27-2025",
    ecpc1: 24,
    ecpc2: 25,
    ecpc3: 19,
    max: 30,
    min: 10,
  },
  {
    date: "01-27-2025",
    ecpc1: 19,
    ecpc2: 17,
    ecpc3: 20,
    max: 30,
    min: 10,
  },
  {
    date: "01-27-2025",
    ecpc1: 21,
    ecpc2: 18,
    ecpc3: 19,
    max: 30,
    min: 10,
  },
  {
    date: "01-27-2025",
    ecpc1: 20,
    ecpc2: 25,
    ecpc3: 25,
    max: 30,
    min: 10,
  },
];

const OutputChart = () => {
  const totalBarData = [
    { name: "ECP C1", value: data[0].ecpc1Total, fill: "#00eaff" },
    { name: "ECP C2", value: data[0].ecpc2Total, fill: "#38e0b6" },
    { name: "ECP C3", value: data[0].ecpc3Total, fill: "#b278f1" },
  ];

  return (
    <Box
  sx={{
    backgroundColor: "#262848",
    borderRadius: 4,
    width: "700px",
    color: "#fff",
  }}
>
  <Typography
    variant="h6"
    align="center"
    fontWeight="bold"
    sx={{ color: "#fff", mb: 4 }}
  >
    OUTPUT (Pcs.)
  </Typography>

  <Box sx={{ display: "flex", gap: 2 }}>
    {/* Line Chart (ซ้าย) */}
    <ResponsiveContainer width="50%" height={330}>
      <ComposedChart data={data}>
        <CartesianGrid stroke="#444" />
        <XAxis dataKey="date" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        {/* ✅ Legend moved to top */}
        <Legend
          verticalAlign="top"
          align="center"
          wrapperStyle={{ top: -30 }}
          formatter={(value) => (
            <span style={{ color: "#fff", fontWeight: "bold",}}>{value}</span>
          )}
        />
        <Line type="monotone" dataKey="ecpc1" stroke="#00eaff" name="ECP C1" dot />
        <Line type="monotone" dataKey="ecpc2" stroke="#38e0b6" name="ECP C2" dot />
        <Line type="monotone" dataKey="ecpc3" stroke="#b278f1" name="ECP C3" dot />
        <Line type="monotone" dataKey="max" stroke="#ff5c93" name="MAX" dot />
        <Line
          type="monotone"
          dataKey="min"
          stroke="#ff5c93"
          name="MIN"
          strokeDasharray="5 5"
          dot
        />
      </ComposedChart>
    </ResponsiveContainer>

    {/* Bar Chart (ขวา) ปรับเป็นแนวตั้ง */}
    <ResponsiveContainer width="30%" height={300}>
  <BarChart data={totalBarData} margin={{ top: 20 }}>
    <XAxis dataKey="name" stroke="#fff" />
    <YAxis stroke="#fff" />
    <Tooltip />
    <Bar dataKey="value">
      <LabelList
        dataKey="value"
        position="top"
        fill="#fff"
        fontWeight="bold"
      />
    </Bar>
  </BarChart>
</ResponsiveContainer>

  </Box>
</Box>

  );
};

export default OutputChart;
