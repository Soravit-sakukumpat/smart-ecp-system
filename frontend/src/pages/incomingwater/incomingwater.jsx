import React from 'react';
import {
  Box,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';
import WaterMonitoring from '../../components/waterMonitoring/waterMonitoring';
import FilterAndAlertWaterMonitor from '../../components/waterMonitoring/filterAndAlertWater';
import WaterReport from '../../components/waterMonitoring/waterReport';

export default function IncomingWater() {
  return (
    <Box sx={{display: "flex"}}>
        <Grid container spacing={3} sx={{display: "flex"}}>
        {/*component*/}
        <Grid item xs={12} md={12} lg={12} sx={{mx: 3, my: 3}} >
        
        <Typography variant='h3' sx={{ fontWeight:"bold",fontStyle:"italic", mb: 3}}>
            Incoming Water
        </Typography>
            <WaterMonitoring />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{mx: 1, my: 4}} >
                <FilterAndAlertWaterMonitor />
                <WaterReport/>
            </Grid>
        </Grid>
    </Box>
  )
}
