import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  Cell,
} from "recharts";

const ChemicalUsage = () => {
  // ------------------------------
  // ข้อมูลกราฟซ้าย (4 หมวด + 3 แท่ง)
  // ------------------------------
  const leftData = [
    {
      name: "Diary top up",
      ecpC1: 10,
      ecpC2: 90,
      ecpC3: 10,
    },
    {
      name: "CE top up",
      ecpC1: 100,
      ecpC2: 80,
      ecpC3: 60,
    },
    {
      name: "Chemical change",
      ecpC1: 600,
      ecpC2: 300,
      ecpC3: 0,
    },
    {
      name: "Special top up",
      ecpC1: 100,
      ecpC2: 0,
      ecpC3: 10,
    },
  ];

  // กำหนดสีของ ECP C1, C2, C3
  const barColorsLeft = {
    ecpC1: "#00eaff", // ฟ้า
    ecpC2: "#38e0b6", // เขียวอ่อน
    ecpC3: "#b278f1", // ม่วง
  };

  // ------------------------------
  // ข้อมูลกราฟขวา (3 หมวด = ECP C1 (L), C2 (L), C3 (L))
  // ------------------------------
  const rightData = [
    { name: "ECP C1 (L)", ecpC1: 300, ecpC2: 0,   ecpC3: 0   },
    { name: "ECP C2 (L)", ecpC1: 0,   ecpC2: 600, ecpC3: 0   },
    { name: "ECP C3 (L)", ecpC1: 0,   ecpC2: 0,   ecpC3: 500 },
  ];

  // กำหนดสีของ ECP C1 (L), C2 (L), C3 (L)
  const barColorsRight = {
    ecpC1: "#00eaff", // ฟ้า
    ecpC2: "#38e0b6", // เขียวอ่อน
    ecpC3: "#b278f1", // ม่วง
  };

  return (
    <Box
      sx={{
        backgroundColor: "#262848",
        borderRadius: 2,
        width: "45vw",
        p: 2,
        color: "#fff",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 1, fontWeight: "bold" }}
      >
        Chemical usage
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {/* ------------------ กราฟซ้าย ------------------ */}
        <Box sx={{ width: "50%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leftData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ backgroundColor: "#333", borderRadius: 4 }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ color: "#fff",marginBottom: 20, }}
                formatter={(value) => (
                  <span style={{ color: "#fff", fontWeight: "bold"}}>{value}</span>
                )}
              />
              {/* ECP C1 */}
              <Bar
                dataKey="ecpC1"
                name="ECP C1"
                fill={barColorsLeft.ecpC1}
                barSize={30}
              >
                <LabelList dataKey="ecpC1" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
              {/* ECP C2 */}
              <Bar
                dataKey="ecpC2"
                name="ECP C2"
                fill={barColorsLeft.ecpC2}
                barSize={30}
              >
                <LabelList dataKey="ecpC2" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
              {/* ECP C3 */}
              <Bar
                dataKey="ecpC3"
                name="ECP C3"
                fill={barColorsLeft.ecpC3}
                barSize={30}
              >
                <LabelList dataKey="ecpC3" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* ------------------ กราฟขวา ------------------ */}
        <Box sx={{ width: "50%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rightData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", borderRadius: 4 }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend
               verticalAlign="top"
                wrapperStyle={{ color: "#fff", marginBottom: 20, }}
                formatter={(value) => (
                  <span style={{ color: "#fff", fontWeight: "bold" }}>{value}</span>
                )}
              />
              {/* ECP C1 (L) */}
              <Bar
                dataKey="ecpC1"
                name="ECP C1 (L)"
                fill={barColorsRight.ecpC1}
                barSize={30}
              >
                <LabelList dataKey="ecpC1" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
              {/* ECP C2 (L) */}
              <Bar
                dataKey="ecpC2"
                name="ECP C2 (L)"
                fill={barColorsRight.ecpC2}
                barSize={30}
              >
                <LabelList dataKey="ecpC2" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
              {/* ECP C3 (L) */}
              <Bar
                dataKey="ecpC3"
                name="ECP C3 (L)"
                fill={barColorsRight.ecpC3}
                barSize={30}
              >
                <LabelList dataKey="ecpC3" position="top" fill="#fff" fontWeight="bold" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ChemicalUsage;
