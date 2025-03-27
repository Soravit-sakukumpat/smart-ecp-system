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
import ChemicalUsageFilter from '../../components/chemicalusage/chemicalUsageFilter';
import ECPBarChart from '../../components/chemicalusage/ecpBarChart';
import ChemicalTable from '../../components/chemicalusage/chemicalTable';


export default function ChemicalUsageMonitoring() {
  return (
    /** กล่องพื้นหลังใหญ่สุดของหน้า ปรับสี/สไตล์ได้ตามต้องการ */
    <Box
      sx={{

        color: '#FFF',
        p: 2,
      }}
    > 
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} lg={6} sx={{ mt: 1}}>
        <ChemicalUsageFilter />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
            <ECPBarChart />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <ChemicalTable />
        </Grid>
      </Grid>
    </Box>
  );
}
