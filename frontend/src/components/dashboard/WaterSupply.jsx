import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function WaterSupplyRectifier() {
  return (
    <Card sx={{ backgroundColor: "#2b2d42", color: "#fff", borderRadius: 2, width: "500px", height: 340, mx: 1}}>
      <CardContent sx={{ padding: "16px" }}>
        {/* ส่วนหัว */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", marginBottom: "8px" }}>
          WATER SUPPLY RECTIFIER
        </Typography>

        {/* ส่วน DI WATER และ OR WATER */}
        <Box mb={1}>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="body2">DI WATER</Typography>
            <Typography variant="body2">
              7.20 m<sup>3</sup>/h
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">OR WATER</Typography>
            <Typography variant="body2">
              13.11 m<sup>3</sup>/h
            </Typography>
          </Box>
        </Box>

        {/* ส่วน ECP1, ECP2, ECP3 */}
        <Box mb={1}>
          <Box display="flex" alignItems="center" mb={0.5}>
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">ECP1</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5}>
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">ECP2</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#00C49F",
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="body2">ECP3</Typography>
          </Box>
        </Box>

        {/* ส่วน INCOMING WATER */}
        <Box mt={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            INCOMING WATER
          </Typography>
          {/* ช่องว่างสำหรับใส่รูปถังน้ำ */}
          <Box sx={{ height: 200 }} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default WaterSupplyRectifier;