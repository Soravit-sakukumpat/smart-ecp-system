import React from "react";
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// รูปภาพเครื่องจักร (สมมติ path ของรูปภาพ)
const machineImages = {
  C1: "path-to-c1-image.jpg", // แทนที่ด้วย path จริงของรูปภาพ C1
  C2: "path-to-c2-image.jpg", // แทนที่ด้วย path จริงของรูปภาพ C2
  C3: "path-to-c3-image.jpg", // แทนที่ด้วย path จริงของรูปภาพ C3
};

// ข้อมูลสำหรับ Pie Chart (OUTPUT) แสดงเป็นเปอร์เซ็นต์
const outputDataC1 = [
  { name: "Output", value: 100 }, // C1 มี Output 100% (ไม่มี MTN, Down time, Buy-off)
];
const outputDataC2 = [
  { name: "Output", value: 77.4 }, // คำนวณจาก (345 / (345 + 4 + 60 + 65)) * 100
  { name: "MTN", value: 0.9 }, // (4 / (345 + 4 + 60 + 65)) * 100
  { name: "Down time", value: 13.5 }, // (60 / (345 + 4 + 60 + 65)) * 100
  { name: "Buy-off", value: 14.6 }, // (65 / (345 + 4 + 60 + 65)) * 100
];
const outputDataC3 = [
  { name: "Output", value: 94.0 }, // คำนวณจาก (3145 / (3145 + 1 + 120 + 50)) * 100
  { name: "MTN", value: 0.03 }, // (1 / (3145 + 1 + 120 + 50)) * 100
  { name: "Down time", value: 3.6 }, // (120 / (3145 + 1 + 120 + 50)) * 100
  { name: "Buy-off", value: 1.5 }, // (50 / (3145 + 1 + 120 + 50)) * 100
];

// ข้อมูลสำหรับตาราง
const tableDataC1 = [
  { name: "MTN", current: "1 Min", percentage: "10.0%" },
  { name: "Down time", current: "120 Min", percentage: "20.0%" },
  { name: "Buy-off", current: "50 Min", percentage: "0.0%" },
];
const tableDataC2 = [
  { name: "MTN", current: "4 Min", percentage: "3.3%" },
  { name: "Down time", current: "60 Min", percentage: "2.6%" },
  { name: "Buy-off", current: "65 Min", percentage: "1.7%" },
];
const tableDataC3 = [
  { name: "MTN", current: "1 Min", percentage: "3.0%" },
  { name: "Down time", current: "120 Min", percentage: "3.0%" },
  { name: "Buy-off", current: "50 Min", percentage: "0.0%" },
];

const COLORS = ["#00C49F", "#FF6B6B", "#8884D8", "#FFBB28"];

function MachineStatus() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* C1 */}
      <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2, flex: 1, mx: 1}}>
        <CardContent sx={{ textAlign: "start", padding: 2 }}>
          <Typography variant="h6">C1</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">RUN</Typography>
          </Box>
          <Typography variant="body2">UPTIME 100%</Typography>
          <Typography variant="body2" sx={{ my: 1 }}>
            PROGRAM S<br />MODEL V111D
          </Typography>
          {/* รูปภาพเครื่องจักร */}
          <Box sx={{ my: 2 }}>
            <img
              src={machineImages.C1}
              alt="C1 Machine"
              style={{ width: "100%", maxHeight: "150px", objectFit: "contain" }}
            />
          </Box>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={outputDataC1}
                dataKey="value"
                nameKey="name"
                outerRadius={50}
                innerRadius={0}
                startAngle={90}
                endAngle={450}
              >
                {outputDataC1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <Typography variant="h6" sx={{ mt: 1 }}>
            OUTPUT 34556
          </Typography>
          <Table sx={{ mt: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Current
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDataC1.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.current}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* C2 */}
      <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2, flex: 1 }}>
        <CardContent sx={{ textAlign: "center", padding: 2 }}>
          <Typography variant="h6">C2</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">RUN</Typography>
          </Box>
          <Typography variant="body2">UPTIME 92.4%</Typography>
          <Typography variant="body2" sx={{ my: 1 }}>
            PROGRAM H<br />MODEL V15CMR-4D
          </Typography>
          {/* รูปภาพเครื่องจักร */}
          <Box sx={{ my: 2 }}>
            <img
              src={machineImages.C2}
              alt="C2 Machine"
              style={{ width: "100%", maxHeight: "150px", objectFit: "contain" }}
            />
          </Box>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={outputDataC2}
                dataKey="value"
                nameKey="name"
                outerRadius={50}
                innerRadius={0}
                startAngle={90}
                endAngle={450}
              >
                {outputDataC2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <Typography variant="h6" sx={{ mt: 1 }}>
            OUTPUT 345
          </Typography>
          <Table sx={{ mt: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Current
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDataC2.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.current}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* C3 */}
      <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2, flex: 1 }}>
        <CardContent sx={{ textAlign: "center", padding: 2 }}>
          <Typography variant="h6">C3</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">RUN</Typography>
          </Box>
          <Typography variant="body2">UPTIME 94.0%</Typography>
          <Typography variant="body2" sx={{ my: 1 }}>
            PROGRAM K<br />MODEL EVANS 9D
          </Typography>
          {/* รูปภาพเครื่องจักร */}
          <Box sx={{ my: 2 }}>
            <img
              src={machineImages.C3}
              alt="C3 Machine"
              style={{ width: "100%", maxHeight: "150px", objectFit: "contain" }}
            />
          </Box>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={outputDataC3}
                dataKey="value"
                nameKey="name"
                outerRadius={50}
                innerRadius={0}
                startAngle={90}
                endAngle={450}
              >
                {outputDataC3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <Typography variant="h6" sx={{ mt: 1 }}>
            OUTPUT 3145
          </Typography>
          <Table sx={{ mt: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Current
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "8px" }}>
                  Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDataC3.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.current}</TableCell>
                  <TableCell sx={{ color: "#fff", borderBottom: "none", padding: "8px" }}>{row.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MachineStatus;