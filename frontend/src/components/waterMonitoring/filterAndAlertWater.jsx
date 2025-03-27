import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";

// ============ ปุ่ม Action สีชมพู ============
const ActionButton = styled(Button)({
  backgroundColor: "#ff4499",
  color: "#fff",
  borderRadius: 20,
  padding: "6px 16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#ff66aa",
  },
});

// ============ ปุ่ม Reset (สีส้ม) ============
const ResetButton = styled(Button)({
  backgroundColor: "#ff9900",
  color: "#fff",
  minWidth: 80,
  marginRight: 8,
  "&:hover": {
    backgroundColor: "#ffaa33",
  },
});

// ============ ปุ่ม Export (สีเขียวอ่อน) ============
const ExportButton = styled(Button)({
  backgroundColor: "#99ff99",
  color: "#000",
  minWidth: 80,
  "&:hover": {
    backgroundColor: "#b3ffb3",
  },
});

export default function FilterAndAlertWaterMonitor() {
  // state สำหรับเก็บค่าฟอร์ม
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [machine, setMachine] = useState("");
  const [dtCategory, setDtCategory] = useState("");

  // ฟังก์ชันตัวอย่าง
  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setMachine("");
    setDtCategory("");
    console.log("Reset clicked");
  };

  const handleExport = () => {
    console.log("Export clicked");
  };

  const handleAction = () => {
    console.log("Action clicked");
  };

  return (
    <Box sx={{ my: 2 }}>
      {/* ===== ส่วน Filter (สีพื้นหลังน้ำเงินเข้ม) ===== */}
      <Paper
        sx={{
          backgroundColor: "#2D3153",
          p: 3,
          borderRadius: 2,
          mb: 2,
          display:"flex",
          justifyContent: "space-around",
          width: "80vh"
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2,flexDirection: "column", justifyContent:"space-around"}}>
          {/* Start date time */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h5"sx={{ color: "white", fontWeight: "bold", mx: 1, my: 3 }}>
              Start date time :
            </Typography>
            <TextField
              placeholder="mm/dd/yyyy --:-- --"
              size="small"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,
                },
                width: 180,
              }}
            />

<Typography  variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
              To :
            </Typography>
            <TextField
              placeholder="mm/dd/yyyy --:-- --"
              size="small"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,
                },
                width: 180,
              }}
            />

              {/* ปุ่ม Reset, Export */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ResetButton variant="contained" onClick={handleReset}>
              RESET
            </ResetButton>
          </Box>
          </Box>

          {/* To date time */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
       
          </Box>

          {/* Machine */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography  variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
              Machine :
            </Typography>
            <FormControl
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,
                },
                width: 150,
              }}
            >
              <Select
                displayEmpty
                value={machine}
                onChange={(e) => setMachine(e.target.value)}
              >
                <MenuItem value="">-- Select Machine --</MenuItem>
                <MenuItem value="ECP C1">ECP C1</MenuItem>
                <MenuItem value="ECP C2">ECP C2</MenuItem>
                <MenuItem value="ECP C3">ECP C3</MenuItem>
              </Select>
            </FormControl>

            <Typography  variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
              DT Categories :
            </Typography>
            <FormControl
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,
                },
                width: 150,
              }}
            >
              <Select
                displayEmpty
                value={dtCategory}
                onChange={(e) => setDtCategory(e.target.value)}
              >
                <MenuItem value="">-- Select Category --</MenuItem>
                <MenuItem value="E00">E00 Chemical change</MenuItem>
                <MenuItem value="E01">E01 Daily Cleaning</MenuItem>
                <MenuItem value="E02">E02 By off product</MenuItem>
                <MenuItem value="E03">E03 Repair machine</MenuItem>
                <MenuItem value="E04">E04 MTN MC</MenuItem>
                <MenuItem value="E05">E05 Machine error</MenuItem>
              </Select>
            </FormControl>

            <ExportButton variant="contained" onClick={handleExport}>
              EXPORT
            </ExportButton>
          </Box>

          {/* DT Categories */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          </Box>

        
        </Box>
      </Paper>

      {/* ===== ส่วน Alert (สีขาว) + ปุ่ม Action (สีชมพู) ===== */}
      <Box
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          p: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ไอคอนสัญญาณเตือน */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WarningAmberIcon sx={{ fontSize: 40, color: "#e53935" }} />
        </Box>
        <ActionButton variant="contained" onClick={handleAction}>
          Action
        </ActionButton>
      </Box>
    </Box>
  );
}
