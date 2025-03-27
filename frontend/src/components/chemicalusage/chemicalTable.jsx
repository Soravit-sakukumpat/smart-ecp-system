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
  Button,
  TextField,
  Typography,
  Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const sampleData = [
  {
    date: '2024-12-20 14:07:29.169',
    machine: 'ECP C1',
    weeklyChange: 350,
    dailyTopUp: 500,
    cummulative30KA: 200,
    actionBy: 'AA',
  },
  {
    date: '2024-12-20 14:08:29.169',
    machine: 'ECP C1',
    weeklyChange: 350,
    dailyTopUp: 500,
    cummulative30KA: 200,
    actionBy: 'AA',
  },
  {
    date: '2024-12-20 14:09:29.169',
    machine: 'ECP C1',
    weeklyChange: 350,
    dailyTopUp: 500,
    cummulative30KA: 200,
    actionBy: 'AA',
  },
  {
    date: '2024-12-20 14:10:29.169',
    machine: 'ECP C1',
    weeklyChange: 350,
    dailyTopUp: 500,
    cummulative30KA: 200,
    actionBy: 'AA',
  },
  // ... เพิ่ม row ตามต้องการ ...
];

export default function ChemicalTable() {
  // State สำหรับเปิด/ปิด dialog
  const [open, setOpen] = useState(false);

  // State สำหรับเก็บข้อมูลฟอร์ม
  const [editData, setEditData] = useState({
    weeklyChange: '',
    dailyTopUp: '',
    cummulative: '',
    action: '',
  });

  // เมื่อกดปุ่ม Edit
  const handleEditClick = (row) => {
    // สมมุติเราจะโหลด weeklyChange, dailyTopUp, cummulative30KA, actionBy ลงใน popup
    setEditData({
      weeklyChange: row.weeklyChange.toString(),
      dailyTopUp: row.dailyTopUp.toString(),
      cummulative: row.cummulative30KA.toString(),
      action: row.actionBy,
    });
    setOpen(true);
  };

  // เมื่อปิด popup (กด Cancel หรือ backdrop)
  const handleClose = () => {
    setOpen(false);
  };

  // เมื่อกด Apply
  const handleApply = () => {
    // TODO: จัดการอัปเดตข้อมูลจริง หรือเรียก API
    console.log('Edit Data = ', editData);
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 0,
          borderRadius: '16px',
          overflow: 'auto',
        }}
      >
        <Table
          sx={{
            borderCollapse: 'collapse',
            width: '183vh',
            '& .MuiTableCell-root': {
              border: '1px solid #1B1E4B',
              backgroundColor: '#fff',
              color: '#000',
              py: 1,
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
              <TableCell>Data (unit)</TableCell>
              <TableCell>Machine</TableCell>
              <TableCell>Weekly change (Liter)</TableCell>
              <TableCell>Daily Top-Up (Liter)</TableCell>
              <TableCell>Cummulative30KA (A/Hr. L)</TableCell>
              <TableCell>Action by</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.machine}</TableCell>
                <TableCell>{row.weeklyChange}</TableCell>
                <TableCell>{row.dailyTopUp}</TableCell>
                <TableCell>{row.cummulative30KA}</TableCell>
                <TableCell>{row.actionBy}</TableCell>
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

      {/* Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#5A5D65', // พื้นหลัง popup
            color: '#fff',
            borderRadius: '0 0 20px 20px', // ตัวอย่างการโค้งมุม
          },
        }}
      >
        {/* ส่วนหัว Popup */}
        <Box sx={{ backgroundColor: '#2C2F5A', p: 1.5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            EDIT DATA
          </Typography>
        </Box>

        {/* ส่วนฟอร์ม */}
        <Box sx={{ px: 2, py: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Weekly change :
              </Typography>
              <TextField
                size="small"
                value={editData.weeklyChange}
                onChange={(e) =>
                  setEditData({ ...editData, weeklyChange: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Cumulative :
              </Typography>
              <TextField
                size="small"
                value={editData.cummulative}
                onChange={(e) =>
                  setEditData({ ...editData, cummulative: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Daily Top Up :
              </Typography>
              <TextField
                size="small"
                value={editData.dailyTopUp}
                onChange={(e) =>
                  setEditData({ ...editData, dailyTopUp: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Action :
              </Typography>
              <TextField
                size="small"
                value={editData.action}
                onChange={(e) =>
                  setEditData({ ...editData, action: e.target.value })
                }
                sx={inputStyle}
              />
            </Grid>
          </Grid>
        </Box>

        {/* ปุ่ม Apply / Cancel */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 2 }}>
          <Button
            onClick={handleApply}
            sx={{
              backgroundColor: '#00b8f0',
              color: '#fff',
              borderRadius: '20px',
              px: 3,
              '&:hover': {
                backgroundColor: '#00c2ff',
              },
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
              '&:hover': {
                backgroundColor: '#ff3e90',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

// สไตล์สำหรับ TextField ในฟอร์ม
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
