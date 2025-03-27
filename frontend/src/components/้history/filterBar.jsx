import React from "react";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const FilterBar = () => {
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());
  const [workWeek, setWorkWeek] = React.useState("");
  const [sites, setSites] = React.useState({
    ecpc1: true,
    ecpc2: true,
    ecpc3: true,
  });

  const handleReset = () => {
    setStartDate(dayjs());
    setEndDate(dayjs());
    setWorkWeek("");
    setSites({ ecpc1: true, ecpc2: true, ecpc3: true });
  };

  const handleExport = () => {
    console.log("Exporting data...");
    // TODO: Your export logic
  };

  return (
    <Box
    sx={{
      backgroundColor: "#262848",
      borderRadius: 4,
      p: 2,
      display: "flex",
      width: "92vw",
      alignItems: "center",
      gap: 2,
      flexWrap: "wrap",
    }}
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 270 }}>
        <Typography fontWeight="bold" color="#fff">Start date time:</Typography>
        <DatePicker
          value={startDate}
          onChange={(val) => setStartDate(val)}
          slotProps={{
            textField: {
              size: "small",
              sx: { backgroundColor: "#fff", borderRadius: 2, minWidth: 110 },
            },
          }}
        />
        <Typography color="#fff">To</Typography>
        <DatePicker
          value={endDate}
          onChange={(val) => setEndDate(val)}
          slotProps={{
            textField: {
              size: "small",
              sx: { backgroundColor: "#fff", borderRadius: 2, minWidth: 110 },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 200 }}>
      <Typography fontWeight="bold" color="#fff">Work week:</Typography>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={workWeek}
          onChange={(e) => setWorkWeek(e.target.value)}
          displayEmpty
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        >
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value="week1">Week 1</MenuItem>
          <MenuItem value="week2">Week 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", minWidth: 180 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={sites.ecpc1}
            onChange={(e) => setSites({ ...sites, ecpc1: e.target.checked })}
            sx={{ color: "#00ffff" }}
          />
        }
        label={<span style={{ fontWeight: "bold", color: "#fff" }}>ECP C1</span>}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sites.ecpc2}
            onChange={(e) => setSites({ ...sites, ecpc2: e.target.checked })}
            sx={{ color: "#00ffff" }}
          />
        }
        label={<span style={{ fontWeight: "bold", color: "#fff" }}>ECP C2</span>}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sites.ecpc3}
            onChange={(e) => setSites({ ...sites, ecpc3: e.target.checked })}
            sx={{ color: "#00ffff" }}
          />
        }
        label={<span style={{ fontWeight: "bold", color: "#fff" }}>ECP C3</span>}
      />
    </Box>
  
    <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
      <Button
        variant="contained"
        onClick={handleReset}
        startIcon={<RestartAltIcon />}
        sx={{
          background: "linear-gradient(to right, #ffa17f, #ff6a00)",
          borderRadius: 8,
          fontWeight: "bold",
        }}
      >
        RESET
      </Button>
      <Button
        variant="contained"
        onClick={handleExport}
        startIcon={<FileUploadIcon />}
        sx={{
          background: "linear-gradient(to right, #a8e063, #56ab2f)",
          borderRadius: 8,
          fontWeight: "bold",
        }}
      >
        EXPORT
      </Button>
    </Box>
  </Box>
  
  );
};

export default FilterBar;
