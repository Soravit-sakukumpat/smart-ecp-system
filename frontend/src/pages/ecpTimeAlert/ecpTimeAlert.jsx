import React from 'react';
import {
  Box,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';
import ECPDashboard from '../../components/ecptimealert/ecpdashboard';
import DownTimeReport from '../../components/ecptimealert/downtimeReport';
import FilterAndActionBar from '../../components/ecptimealert/filterAndActionBar';

export default function EcpTimeAlert() {
  return (
    <Box sx={{display: "flex"}}>
        <Grid container spacing={3} sx={{display: "flex"}}>
        {/*component*/}
        <Grid item xs={12} md={12} lg={12} sx={{mx: 3, my: 3}} >
        
        <Typography variant='h3' sx={{ fontWeight:"bolde", mb: 3}}>
        <AccessAlarm sx={{ fontSize: "50px"}} />
            ECP Uptime & Downtime
        </Typography>
            <ECPDashboard />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{mx: 1, my: 4}} >
                <FilterAndActionBar />
                <DownTimeReport />
            </Grid>
        </Grid>
    </Box>
  )
}
