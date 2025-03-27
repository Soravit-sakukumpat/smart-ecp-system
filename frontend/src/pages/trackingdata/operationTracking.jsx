import React from 'react';
import {
  Box,
  Grid2 as Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; // ไอคอนรูปตา
import FilterPanel from '../../components/outputtracking/filterPanel';
import ParameterPanel from '../../components/outputtracking/paramPanel';
import CustomTable from '../../components/outputtracking/dataTableWithEdit';

export default function OperationOutputTracking() {
  return (
    /** กล่องพื้นหลังใหญ่สุดของหน้า ปรับสี/สไตล์ได้ตามต้องการ */
    <Box
      sx={{
        minHeight: '100vh',
        color: '#FFF',
        p: 2,
      }}
    >
      {/* Title หลัก */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', my: 1, display: "flex", justifyContent: "space-between" }}
      >
        Operation output tracking
      </Typography> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{ mt: 4}}>
        <FilterPanel />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                 <VisibilityIcon sx={{ mr: 1 }} />
                Parameter
              </Typography>
        <ParameterPanel />
        </Grid>
        <Grid>
          <CustomTable />
        </Grid>
      </Grid>
    </Box>
  );
}
