import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

// ข้อมูลสำหรับแต่ละ ECP และ maxCapacity ของแต่ละชั้น
const ecpData = [
  { name: "ECP1", value: 29764, maxCapacity: 50000 },
  { name: "ECP2", value: 36836, maxCapacity: 50000 },
  { name: "ECP3", value: 30757, maxCapacity: 50000 }
];

// สีสำหรับแต่ละ ECP
const COLORS = ["#00C49F", "#00B7EB", "#8884D8"];
const TRANSPARENT_COLOR = "rgba(128, 128, 128, 0.2)"; // สีโปร่งแสงสำหรับส่วนที่เหลือ

// สร้างข้อมูลสำหรับแต่ละชั้น (เพิ่มส่วนที่เหลือ)
const pieDataECP1 = [
  { name: "ECP1", value: ecpData[0].value },
  { name: "Remaining", value: ecpData[0].maxCapacity - ecpData[0].value }
];

const pieDataECP2 = [
  { name: "ECP2", value: ecpData[1].value },
  { name: "Remaining", value: ecpData[1].maxCapacity - ecpData[1].value }
];

const pieDataECP3 = [
  { name: "ECP3", value: ecpData[2].value },
  { name: "Remaining", value: ecpData[2].maxCapacity - ecpData[2].value }
];

// ข้อมูลสำหรับ Progress Bar
const ecpProgressData = [
  { name: "ECP1", percent: 67, color: COLORS[0] },
  { name: "ECP2", percent: 81, color: COLORS[1] },
  { name: "ECP3", percent: 68, color: COLORS[2] }
];

function CumulativeSurfaceChart() {
  return (
    <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2, mx: 1}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Cumulative Surface (Amp/Hr)
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          {/* กล่องครอบ PieChart */}
          <Box sx={{ width: "50%", height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* วงสำหรับ ECP1 */}
                <Pie
                  data={pieDataECP1}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={52} // ลดขนาดลง
                  innerRadius={45}
                  startAngle={90}
                  endAngle={-450}
                  label={false}
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill={TRANSPARENT_COLOR} />
                </Pie>

                {/* วงสำหรับ ECP2 */}
                <Pie
                  data={pieDataECP2}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={40} // ลดขนาดลง
                  innerRadius={35}
                  startAngle={90}
                  endAngle={-450}
                  label={false}
                >
                  <Cell fill={COLORS[1]} />
                  <Cell fill={TRANSPARENT_COLOR} />
                </Pie>

                {/* วงสำหรับ ECP3 */}
                <Pie
                  data={pieDataECP3}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={30} // ลดขนาดลง
                  innerRadius={25}
                  startAngle={90}
                  endAngle={-450}
                  label={false}
                >
                  <Cell fill={COLORS[2]} />
                  <Cell fill={TRANSPARENT_COLOR} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>

          {/* Legend ด้านขวา */}
          <Box ml={2}>
            {ecpData.map((entry, index) => (
              <Typography
                key={entry.name}
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: COLORS[index],
                    marginRight: 1
                  }}
                />
                {entry.name}: {entry.value}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Progress Bars ด้านล่าง */}
        <Box mt={2}>
          {ecpProgressData.map((item) => (
            <Box key={item.name} mb={1}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                {item.name} ({item.percent}%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={item.percent}
                sx={{
                  height: 10,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: item.color
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CumulativeSurfaceChart;