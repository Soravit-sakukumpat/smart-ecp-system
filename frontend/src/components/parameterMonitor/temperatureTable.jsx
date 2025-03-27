import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const sampleData = [
  {
    date: '2024-12-20',
    time: '14:00:40.929',
    machine: 'ECP C1',
    tempA: 90.2,
    tempB: 90.2,
    lslSpec: 89.0,
    spec: 90.0,
    uslSpec: 91.0,
    judgement: 'Out spec'
  },
  {
    date: '2024-12-20',
    time: '14:01:40.929',
    machine: 'ECP C1',
    tempA: 90.3,
    tempB: 90.3,
    lslSpec: 89.0,
    spec: 90.0,
    uslSpec: 91.0,
    judgement: 'Out spec'
  },
  {
    date: '2024-12-20',
    time: '14:02:40.929',
    machine: 'ECP C1',
    tempA: 89.3,
    tempB: 89.3,
    lslSpec: 89.0,
    spec: 90.0,
    uslSpec: 91.0,
    judgement: 'Out spec'
  },
  // ... เพิ่มข้อมูลตามต้องการ ...
];

export default function TemperatureTable() {
  // State สำหรับควบคุม Dialog
  const [open, setOpen] = useState(false);

  // State สำหรับเก็บฟอร์ม Temp A, Temp B, Density
  const [editData, setEditData] = useState({
    tempA: '',
    tempB: '',
    density: '',
  });

  // เมื่อกดปุ่ม Edit ที่ตาราง
  const handleEditClick = (row) => {
    // ตัวอย่าง: โหลดเฉพาะ tempA, tempB จาก row ลงใน state editData
    setEditData({
      tempA: row.tempA.toString(),
      tempB: row.tempB.toString(),
      density: '', // หรือค่าอื่นตามต้องการ
    });
    setOpen(true);
  };

  // เมื่อกดปุ่ม Cancel หรือปิด Dialog
  const handleClose = () => {
    setOpen(false);
  };

  // เมื่อกดปุ่ม Apply
  const handleApply = () => {
    // TODO: จัดการอัปเดตข้อมูลจริง หรือเรียก API ที่ต้องการ
    console.log('Edit Data:', editData);
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 1,
          borderRadius: '16px',
          overflow: 'auto',
          backgroundColor: '#2C2F5A'
        }}
      >
        <Table
          sx={{
            borderCollapse: 'collapse',
            width: '175vh',
            '& .MuiTableCell-root': {
              border: '1px solid #1B1E4B',
              color: '#000',
              backgroundColor: '#fff',
              py: '4px',
              px: '8px',
              fontSize: '0.9rem',
            },
            '& .MuiTableHead-root .MuiTableCell-root': {
              backgroundColor: '#C0C0C0',
              color: '#000',
              fontWeight: 'bold',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Machine</TableCell>
              <TableCell>Temperature Tank A (C)</TableCell>
              <TableCell>Temperature Tank B (C)</TableCell>
              <TableCell>LSL Spec. (C)</TableCell>
              <TableCell>Specification (C)</TableCell>
              <TableCell>USL Spec. (C)</TableCell>
              <TableCell>Parameter Judgement</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.machine}</TableCell>
                <TableCell>{row.tempA}</TableCell>
                <TableCell>{row.tempB}</TableCell>
                <TableCell>{row.lslSpec}</TableCell>
                <TableCell>{row.spec}</TableCell>
                <TableCell>{row.uslSpec}</TableCell>
                <TableCell>{row.judgement}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton
                    sx={{ color: '#000' }}
                    onClick={() => handleEditClick(row)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Dialog Popup "EDIT DATA" */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#5A5D65', // สีเทาตามภาพ
            borderRadius: '0 0 20px 20px', // ตัวอย่างโค้งเฉพาะบางมุม
            color: '#fff',
          },
        }}
      >
        {/* แถบหัว (Title) บนสุด */}
        <Box sx={{ backgroundColor: '#2C2F5A', p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            EDIT DATA
          </Typography>
        </Box>

        {/* ส่วนกลาง (Temp A, Temp B, Density) */}
        <Box sx={{ backgroundColor: '#5A5D65', px: 2, py: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
                Temp A :
              </Typography>
              <TextField
                size="small"
                value={editData.tempA}
                onChange={(e) =>
                  setEditData({ ...editData, tempA: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
                Temp B :
              </Typography>
              <TextField
                size="small"
                value={editData.tempB}
                onChange={(e) =>
                  setEditData({ ...editData, tempB: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
                Density :
              </Typography>
              <TextField
                size="small"
                value={editData.density}
                onChange={(e) =>
                  setEditData({ ...editData, density: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
          </Grid>
        </Box>

        {/* ปุ่มด้านล่าง (Apply, Cancel) */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 2 }}>
          <Button
            onClick={handleApply}
            sx={{
              backgroundColor: '#00b8f0',
              color: '#fff',
              borderRadius: '20px',
              px: 3,
              '&:hover': { backgroundColor: '#00c2ff' },
            }}
          >
            Apply
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#ff006e',
              color: '#fff',
              borderRadius: '20px',
              px: 3,
              '&:hover': { backgroundColor: '#ff3e90' },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

// สไตล์ TextField ขาว ขอบมน
const inputStyle = {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
  '& .MuiFormLabel-root': {
    color: '#333',
  },
};
