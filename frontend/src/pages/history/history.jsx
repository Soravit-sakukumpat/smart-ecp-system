import { Grid2 as Grid, Typography, } from "@mui/material";
// import TemperatureChart from "../../components/dashboard/TemperatureChart";//use Dashboard Component
import TemperatureChart from "../../components/้history/temperatureHistory";
// import DensityChart from "../../components/dashboard/DensityChart";//use Dashboard Component
import DensityChart from "../../components/้history/densityHistory";
import FilterBar from "../../components/้history/filterBar";
import OutputChart from "../../components/้history/outputChart";
import ChemicalUsage from "../../components/้history/chemicalUsagehistory";
import DowntimeChart from "../../components/้history/downtimeCharts";
const History = () => {
    return (
      <>
      <Grid container spacing={1} sx={{ width: "full"}}>
        <Grid item md={12} xs={12} lg={12} ><FilterBar /></Grid>
        <Grid item md={12} xs={12} lg={12} ><TemperatureChart /></Grid>
        <Grid item md={12} xs={12} lg={12}><DensityChart /></Grid>
        <Grid item md={12} xs={12} lg={12}><OutputChart /></Grid>
        <Grid item md={12} xs={12} lg={12}><ChemicalUsage /></Grid>
        <Grid item md={12} xs={12} lg={12}><DowntimeChart /></Grid>
      </Grid>
      <Grid container spacing={2}>
       
      </Grid>
      </>
    )
  };
  
  export default History;