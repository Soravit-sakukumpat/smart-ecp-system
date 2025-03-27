import React from "react";
import { Grid2 as Grid, Box } from "@mui/material";
import TemperatureChart from "../../components/dashboard/TemperatureChart";
import DensityChart from "../../components/dashboard/DensityChart";
import CumulativeSurfaceChart from "../../components/dashboard/CumulativeSurfaceChart";
import WaterSupplyRectifier from "../../components/dashboard/WaterSupply";
import ChemicalUsageChart from "../../components/dashboard/ChemicalUsageChart";
import MachineStatus from "../../components/dashboard/MachineStatus";
import SystemStatus from "../../components/dashboard/SystemStatus";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 2}}>
      <Grid container spacing={2} sx={{ display: "flex",}}>
        {/* แถวที่ 1: TemperatureChart, DensityChart */}
        <Grid item xs={12} md={6}>
          <TemperatureChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <DensityChart />
        </Grid>

        {/* แถวที่ 3: CumulativeSurfaceChart, WaterSupplyRectifier, ChemicalUsageChart */}
        <Grid item xs={12} md={3}>
          <CumulativeSurfaceChart />
        </Grid>
        <Grid item xs={12} md={3}>
          <WaterSupplyRectifier />
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "400px" }}>
          <ChemicalUsageChart />
        </Grid>

        {/* แถวที่ 4: MachineStatus */}
        <Grid item xs={12} sx={{ width: "1290px"}}>
        <Grid item xs={12} sx={{mb: 1}}>
          <SystemStatus />
        </Grid>
          <MachineStatus />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;