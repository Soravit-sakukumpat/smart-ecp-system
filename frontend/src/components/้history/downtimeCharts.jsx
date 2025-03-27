import React from "react";
import { Box, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    label: "ECPC1",
    values: [
      { name: "Run time", value: 97 },
      { name: "Buy off", value: 3 },
    ],
  },
  {
    label: "ECPC2",
    values: [
      { name: "Run time", value: 94 },
      { name: "MTN", value: 3 },
      { name: "Buy off", value: 3 },
    ],
  },
  {
    label: "ECPC3",
    values: [
      { name: "Run time", value: 88 },
      { name: "MTN", value: 2 },
      { name: "Buy off", value: 10 },
    ],
  },
];

// สีแต่ละประเภท
const COLORS = {
  "Run time": "#34bfa3", // เขียว
  "MTN": "#f86c6b",       // แดง
  "Buy off": "#339af0",   // น้ำเงิน
};

const RADIAN = Math.PI / 180;

// สำหรับ render label %
const renderLabel = ({ percent, name }) =>
  percent > 0 ? `${name} ${Math.round(percent * 100)}%` : "";

const DowntimeChart = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#262848",
        p: 2,
        borderRadius: 4,
        color: "#fff",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        fontStyle="italic"
        fontWeight="bold"
        sx={{ mb: 2 }}
      >
        Down time
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => (
          <Box key={index} sx={{ width: 270, textAlign: "center", height: 290 }}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={item.values}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  label={renderLabel}
                  labelLine={false}
                >
                  {item.values.map((entry, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={COLORS[entry.name] || "#8884d8"}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#333", borderRadius: 4 }}
                  labelStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>

            <Typography
              variant="subtitle1"
              fontWeight="bold"
              fontStyle="italic"
              sx={{ mt: -1 }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DowntimeChart;
