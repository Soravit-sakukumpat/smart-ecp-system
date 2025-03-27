// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   TextField,
//   FormControl,
//   Select,
//   MenuItem,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   TableContainer,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber"; // For the warning icon
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // For date picker icon
// import RefreshIcon from "@mui/icons-material/Refresh"; // For Reset button icon
// import DownloadIcon from "@mui/icons-material/Download"; // For Export button icon
// import styled from "@emotion/styled";

// // === Styled Buttons ===
// const ActionButton = styled(Button)({
//   backgroundColor: "#ff4499",
//   color: "#fff",
//   borderRadius: 20,
//   padding: "6px 16px",
//   fontWeight: "bold",
//   "&:hover": {
//     backgroundColor: "#ff66aa",
//   },
// });

// const ResetButton = styled(Button)({
//   backgroundColor: "#ff9900",
//   color: "#fff",
//   borderRadius: 20,
//   padding: "6px 16px",
//   "&:hover": {
//     backgroundColor: "#ffaa33",
//   },
// });

// const ExportButton = styled(Button)({
//   backgroundColor: "#99ff99",
//   color: "#000",
//   borderRadius: 20,
//   padding: "6px 16px",
//   "&:hover": {
//     backgroundColor: "#b3ffb3",
//   },
// });

// // === Sample Data for the Table ===
// const downtimeData = [
//   {
//     dateTime: "2024-12-20 14:07:29.169",
//     machine: "ECP C1",
//     cause: "E00 Chemical change",
//     totalDown: 240,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:08:29.169",
//     machine: "ECP C1",
//     cause: "E01 Daily Cleaning",
//     totalDown: 90,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:09:29.169",
//     machine: "ECP C1",
//     cause: "E02 By off product",
//     totalDown: 30,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:10:29.169",
//     machine: "ECP C1",
//     cause: "E03 Repair machine",
//     totalDown: 20,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:11:29.169",
//     machine: "ECP C1",
//     cause: "E04 MTN MC",
//     totalDown: 0,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:27:45.427",
//     machine: "ECP C1",
//     cause: "E05 Machine error",
//     totalDown: 70,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:28:45.427",
//     machine: "ECP C1",
//     cause: "E06 Load error",
//     totalDown: 0,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:29:45.427",
//     machine: "ECP C1",
//     cause: "E07 Water Low",
//     totalDown: 0,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:30:45.427",
//     machine: "ECP C1",
//     cause: "E08 Power trip",
//     totalDown: 0,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:31:45.427",
//     machine: "ECP C1",
//     cause: "E09 Quality Issue",
//     totalDown: 0,
//     remark: "",
//   },
//   {
//     dateTime: "2024-12-20 14:07:29.169",
//     machine: "ECP C1",
//     cause: "E00 Chemical change",
//     totalDown: 240,
//     remark: "",
//   },
// ];

// const DownTimeReport = () => {
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [machine, setMachine] = useState("");
//   const [dtCategory, setDtCategory] = useState("");

//   const handleReset = () => {
//     setStartDate("");
//     setEndDate("");
//     setMachine("");
//     setDtCategory("");
//     console.log("Reset clicked");
//   };

//   const handleExport = () => {
//     console.log("Export clicked");
//   };

//   const handleAction = () => {
//     console.log("Action clicked");
//   };

//   return (
//     <Card
//       sx={{
//         backgroundColor: "#2D3153",
//         color: "white",
//         borderRadius: 5,
//         p: 2,
//         minWidth: 800,
//       }}
//     >
//       <CardContent sx={{ p: 0 }}>
//         {/* Filter Section */}
//         <Box
//           sx={{
//             backgroundColor: "#2D3153",
//             px: 3,
//             pt: 2,
//             pb: 2,
//             borderBottom: "1px solid #ffffff33",
//           }}
//         >
//           <Grid container spacing={2} alignItems="center">
//             {/* Start date time */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography sx={{ fontWeight: "bold", fontSize: 14, mb: 1 }}>
//                 Start date time:
//               </Typography>
//               <TextField
//                 placeholder="mm/dd/yyyy --:-- --"
//                 size="small"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 InputProps={{
//                   endAdornment: (
//                     <IconButton size="small">
//                       <CalendarTodayIcon sx={{ color: "gray", fontSize: 16 }} />
//                     </IconButton>
//                   ),
//                 }}
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-root": {
//                     backgroundColor: "white",
//                     borderRadius: 1,
//                     color: "black",
//                     height: 36, // Match the height from the image
//                   },
//                 }}
//               />
//             </Grid>

//             {/* To date time */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography sx={{ fontWeight: "bold", fontSize: 14, mb: 1 }}>
//                 To
//               </Typography>
//               <TextField
//                 placeholder="mm/dd/yyyy --:-- --"
//                 size="small"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 InputProps={{
//                   endAdornment: (
//                     <IconButton size="small">
//                       <CalendarTodayIcon sx={{ color: "gray", fontSize: 16 }} />
//                     </IconButton>
//                   ),
//                 }}
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-root": {
//                     backgroundColor: "white",
//                     borderRadius: 1,
//                     color: "black",
//                     height: 36,
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Machine */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography sx={{ fontWeight: "bold", fontSize: 14, mb: 1 }}>
//                 Machine:
//               </Typography>
//               <FormControl
//                 size="small"
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-root": {
//                     backgroundColor: "white",
//                     borderRadius: 1,
//                     color: "black",
//                     height: 36,
//                   },
//                 }}
//               >
//                 <Select
//                   value={machine}
//                   onChange={(e) => setMachine(e.target.value)}
//                   displayEmpty
//                 >
//                   <MenuItem value="">-- Select M...</MenuItem>
//                   <MenuItem value="ECP C1">ECP C1</MenuItem>
//                   <MenuItem value="ECP C2">ECP C2</MenuItem>
//                   <MenuItem value="ECP C3">ECP C3</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             {/* DT Categories */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography sx={{ fontWeight: "bold", fontSize: 14, mb: 1 }}>
//                 DT Categories:
//               </Typography>
//               <FormControl
//                 size="small"
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-root": {
//                     backgroundColor: "white",
//                     borderRadius: 1,
//                     color: "black",
//                     height: 36,
//                   },
//                 }}
//               >
//                 <Select
//                   value={dtCategory}
//                   onChange={(e) => setDtCategory(e.target.value)}
//                   displayEmpty
//                 >
//                   <MenuItem value="">-- Select Ca...</MenuItem>
//                   <MenuItem value="E00">E00 Chemical change</MenuItem>
//                   <MenuItem value="E01">E01 Daily Cleaning</MenuItem>
//                   <MenuItem value="E02">E02 By off product</MenuItem>
//                   <MenuItem value="E03">E03 Repair machine</MenuItem>
//                   <MenuItem value="E04">E04 MTN MC</MenuItem>
//                   <MenuItem value="E05">E05 Machine error</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             {/* Reset and Export Buttons */}
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={4}
//               sx={{
//                 display: "flex",
//                 gap: 1,
//                 justifyContent: { xs: "flex-start", md: "flex-end" },
//                 alignItems: "center",
//               }}
//             >
//               <ResetButton
//                 variant="contained"
//                 onClick={handleReset}
//                 startIcon={<RefreshIcon />}
//               >
//                 Reset
//               </ResetButton>
//               <ExportButton
//                 variant="contained"
//                 onClick={handleExport}
//                 startIcon={<DownloadIcon />}
//               >
//                 Export
//               </ExportButton>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Warning Icon + Action Button */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             px: 3,
//             py: 2,
//             backgroundColor: "#2D3153",
//             borderBottom: "1px solid #ffffff33",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <WarningAmberIcon sx={{ fontSize: 40, color: "#ff5566" }} />
//           </Box>
//           <ActionButton onClick={handleAction}>Action</ActionButton>
//         </Box>

//         {/* Downtime Table (same as before) */}
//         <Box sx={{ mt: 2, px: 2 }}>
//           <TableContainer
//             component={Paper}
//             sx={{
//               backgroundColor: "#2D3153",
//               maxHeight: 500,
//               borderRadius: 2,
//               boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//             }}
//           >
//             <Table
//               stickyHeader
//               sx={{
//                 "& .MuiTableCell-root": {
//                   border: "1px solid #ffffff33",
//                   borderCollapse: "collapse",
//                   padding: "8px 12px",
//                   textAlign: "left",
//                 },
//               }}
//             >
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#1A1D3A" }}>
//                   <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
//                     Date (unit)
//                   </TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
//                     Machine-Down time
//                   </TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
//                     DT Cause
//                   </TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
//                     Total down time
//                   </TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
//                     Remark
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {downtimeData.map((row, idx) => (
//                   <TableRow key={idx} sx={{ "&:hover": { backgroundColor: "#3A3F66" } }}>
//                     <TableCell sx={{ color: "white", fontSize: 13 }}>
//                       {row.dateTime}
//                     </TableCell>
//                     <TableCell sx={{ color: "white", fontSize: 13 }}>
//                       {row.machine}
//                     </TableCell>
//                     <TableCell sx={{ color: "white", fontSize: 13 }}>{row.cause}</TableCell>
//                     <TableCell sx={{ color: "white", fontSize: 13 }}>
//                       {row.totalDown}
//                     </TableCell>
//                     <TableCell sx={{ color: "white", fontSize: 13 }}>
//                       {row.remark || "-"}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default DownTimeReport;

import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

// ตัวอย่างข้อมูลในตาราง (สามารถปรับแก้/เพิ่มได้ตามต้องการ)
const downtimeData = [
  {
    dateTime: "2024-12-20 14:07:29.169",
    machine: "ECP C1",
    cause: "E00 Chemical change",
    totalDown: 240,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:08:29.169",
    machine: "ECP C1",
    cause: "E01 Daily Cleaning",
    totalDown: 90,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:09:29.169",
    machine: "ECP C1",
    cause: "E02 By off product",
    totalDown: 30,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:10:29.169",
    machine: "ECP C1",
    cause: "E03 Repair machine",
    totalDown: 20,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:11:29.169",
    machine: "ECP C1",
    cause: "E04 MTN MC",
    totalDown: 0,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:27:45.427",
    machine: "ECP C1",
    cause: "E05 Machine error",
    totalDown: 70,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:28:45.427",
    machine: "ECP C1",
    cause: "E06 Load error",
    totalDown: 0,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:29:45.427",
    machine: "ECP C1",
    cause: "E07 Water Low",
    totalDown: 0,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:30:45.427",
    machine: "ECP C1",
    cause: "E08 Power trip",
    totalDown: 0,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:31:45.427",
    machine: "ECP C1",
    cause: "E09 Quality Issue",
    totalDown: 0,
    remark: "",
  },
  // เพิ่มข้อมูลซ้ำบ้างเพื่อให้ตารางยาวๆ ตามภาพ
  {
    dateTime: "2024-12-20 14:07:29.169",
    machine: "ECP C1",
    cause: "E00 Chemical change",
    totalDown: 240,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:27:45.427",
    machine: "ECP C1",
    cause: "E05 Machine error",
    totalDown: 70,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:09:29.169",
    machine: "ECP C1",
    cause: "E02 By off product",
    totalDown: 30,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:07:29.169",
    machine: "ECP C1",
    cause: "E00 Chemical change",
    totalDown: 240,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:07:29.169",
    machine: "ECP C1",
    cause: "E00 Chemical change",
    totalDown: 240,
    remark: "",
  },
  {
    dateTime: "2024-12-20 14:31:45.427",
    machine: "ECP C1",
    cause: "E09 Quality Issue",
    totalDown: 0,
    remark: "",
  },
];

// สร้าง Component ตารางหลัก
const DowntimeReport = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2D3153", // พื้นหลังสีน้ำเงินเข้ม (ตามภาพรวม)
        padding: 2,
        mt: 3,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          // ให้พื้นหลังตารางเป็นสีขาว
          backgroundColor: "#ffffff",
          // คุมขนาดหรือสไตล์เพิ่มเติม
          height: "460px"
        }}
      >
        <Table
          sx={{
            borderCollapse: "collapse", // รวมเส้นให้ติดกัน
            "& td, & th": {
              border: "1px solid #000", // เส้นกรอบสีดำ
              padding: "8px",
            },
            "& th": {
              backgroundColor: "#ffffff", // หัวตารางเป็นสีขาวเหมือนกัน
              fontWeight: "bold",
              color: "#000",
            },
            "& td": {
              color: "#000", // ตัวหนังสือสีดำ
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Data ( unit )</TableCell>
              <TableCell>Machine-Down time</TableCell>
              <TableCell>DT Cause</TableCell>
              <TableCell>Total down time</TableCell>
              <TableCell>Remark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downtimeData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.dateTime}</TableCell>
                <TableCell>{item.machine}</TableCell>
                <TableCell>{item.cause}</TableCell>
                <TableCell>{item.totalDown}</TableCell>
                <TableCell>{item.remark || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DowntimeReport;
