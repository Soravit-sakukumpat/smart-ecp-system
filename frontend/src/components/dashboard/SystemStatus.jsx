import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function SystemStatus() {
  return (
    <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2 ,mx: 1 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <Box textAlign="center">
          <Typography variant="body2">UPTIME</Typography>
          <Typography variant="h6">95.5%</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2">BUY-OFF TIME</Typography>
          <Typography variant="h6">0.6%</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2">MTN TIME</Typography>
          <Typography variant="h6">2.2%</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2">DOWN TIME</Typography>
          <Typography variant="h6">1.7%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SystemStatus;