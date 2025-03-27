import React from 'react';
import {
  Box,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import TemperatureChart from '../../components/parameterMonitor/temperatureChart';
import TemperatureTable from '../../components/parameterMonitor/temperatureTable';
import FilterPanelWithAlarm from '../../components/parameterMonitor/filterPanelWithAlarm';


export default function ParameterMonitoring() {
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
        Parameter Monitoring
      </Typography> 
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} lg={6} sx={{ mt: 1}}>
        <TemperatureChart />
        </Grid>
        <Grid item xs={6} md={6} lg={6} sx={{ mt: 1}}>
        <FilterPanelWithAlarm />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <TemperatureTable />
        </Grid>
      </Grid>
    </Box>
  );
}
