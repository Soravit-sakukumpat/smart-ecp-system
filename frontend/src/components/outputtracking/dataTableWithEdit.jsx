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

/** จำนวนบรรทัดที่ต้องการ (ปรับได้ตามภาพ) */
const ROW_COUNT = 8;

export default function CustomTable() {
  // state สำหรับควบคุม Dialog (popup)
  const [open, setOpen] = useState(false);

  /** เมื่อคลิกไอคอน Edit ให้เปิด Dialog */
  const handleEditClick = () => {
    setOpen(true);
  };

  /** ปิด Dialog */
  const handleClose = () => {
    setOpen(false);
  };

  /** เมื่อกด Apply */
  const handleApply = () => {
    // TODO: ใส่ logic บันทึกหรืออัปเดตข้อมูลได้ตามต้องการ
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: '180vh',
        minHeight: 'auto',
        p: 0,
      }}
    >
      {/* ตารางหลัก */}
      <Paper
        sx={{
          width: '100%',
          height: 'auto',
          overflow: 'auto',
        }}
      >
        <Table
          sx={{
            borderCollapse: 'collapse',

            // สั่งให้ทุกเซลล์มีขอบ
            '& .MuiTableCell-root': {
              border: '1px solid #000', // เส้นขอบดำเหมือนในภาพ
              // ----- เพิ่มตรงนี้เพื่อให้ตารางเตี้ยลง -----
              paddingY: '4px',    // กำหนดระยะห่างบน-ล่าง
              paddingX: '8px',    // กำหนดระยะห่างซ้าย-ขวา (เลือกปรับได้)
              fontSize: '0.9rem', // ลดขนาดตัวอักษร (ปรับได้)
              // -------------------------------------------
            },
            '& .MuiTableHead-root .MuiTableCell-root': {
              backgroundColor: '#C0C0C0', // หัวตารางสีเทา
              fontWeight: 'bold',
              // ----- เพิ่มตรงนี้เพื่อให้ตารางเตี้ยลง -----
              paddingY: '4px',    // กำหนดระยะห่างบน-ล่าง
              paddingX: '8px',    // กำหนดระยะห่างซ้าย-ขวา (เลือกปรับได้)
              fontSize: '0.9rem', // ลดขนาดตัวอักษร (ปรับได้)
              // -------------------------------------------
            },
          }}
        >
          {/* ส่วนหัวตาราง */}
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Lot</TableCell>
              <TableCell>Machine - lot</TableCell>
              <TableCell>Program</TableCell>
              <TableCell>Load In</TableCell>
              <TableCell>Cumulative</TableCell>
              <TableCell>Temp A</TableCell>
              <TableCell>Temp B</TableCell>
              <TableCell>Qty.</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>

          {/* ส่วนเนื้อหาตาราง (Rows) */}
          <TableBody>
            {Array.from({ length: ROW_COUNT }).map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {/* คอลัมน์ 1: Data */}
                <TableCell />
                {/* คอลัมน์ 2: Model */}
                <TableCell />
                {/* คอลัมน์ 3: Lot */}
                <TableCell />
                {/* คอลัมน์ 4: Machine - lot */}
                <TableCell />
                {/* คอลัมน์ 5: Program */}
                <TableCell />
                {/* คอลัมน์ 6: Load In */}
                <TableCell />
                {/* คอลัมน์ 7: Cumulative */}
                <TableCell />
                {/* คอลัมน์ 8: Temp A */}
                <TableCell />
                {/* คอลัมน์ 9: Temp B */}
                <TableCell />
                {/* คอลัมน์ 10: Qty. */}
                <TableCell />
                {/* คอลัมน์ 11: Edit (มีไอคอน Edit) */}
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton onClick={handleEditClick}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Dialog Popup สำหรับ Edit Data */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#8A909B', // สีพื้นหลัง Popup (ปรับตามภาพตัวอย่าง)
            borderRadius: '8px',
            color: '#fff',
            minWidth: '650px', // กำหนดความกว้างให้ใกล้เคียงภาพ
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            EDIT DATA
          </Typography>
          {/* แบ่งฟิลด์เป็น 4 แถว (Row) แต่ละแถวมี 3, 3, 3, และ 2 ฟิลด์ตามภาพ */}
          <Grid container spacing={2}>
            {/* Row 1: Temp A, DC Current A, ECP time */}
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Temp A :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>DC Current A :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>ECP time :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>

            {/* Row 2: Temp B, Pulse Current A, CP time */}
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Temp B :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Pulse Current A :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>CP time :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>

            {/* Row 3: Density, DC Current B, Swing */}
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Density :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>DC Current B :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Swing :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>

            {/* Row 4: Pulse Current B, Throwing */}
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Pulse Current B :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 0.5 }}>Throwing :</Typography>
              <TextField sx={styles.inputField} size="small" />
            </Grid>
            {/* เหลือพื้นที่อีก (xs={12} sm={4}) 1 ช่อง ที่ไม่ได้ใช้งาน */}
            <Grid item xs={12} sm={4} />
          </Grid>

          {/* ปุ่ม Apply / Cancel */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
            <Button
              onClick={handleApply}
              sx={{
                backgroundColor: '#00b8f0', // ฟ้า
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
                backgroundColor: '#ff006e', // ชมพู/แดง
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
        </Box>
      </Dialog>
    </Box>
  );
}

/** สไตล์ของ TextField */
const styles = {
  inputField: {
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#fff', // ช่อง Input สีขาว
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
  },
};
