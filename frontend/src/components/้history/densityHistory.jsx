import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "01/25", "C1-A": 25, "C1-B": 27, "C2-A": 23, "C2-B": 29, "C3-A": 20, "C3-B": 10, MAX: 30, MIN: 20 },
  { name: "01/26", "C1-A": 26, "C1-B": 28, "C2-A": 32, "C2-B": 23, "C3-A": 20, "C3-B": 10, MAX: 34, MIN: 53 },
  { name: "01/27", "C1-A": 21, "C1-B": 23, "C2-A": 34, "C2-B": 21, "C3-A": 20, "C3-B": 10, MAX: 12, MIN: 34 },
  { name: "01/28", "C1-A": 19, "C1-B": 25, "C2-A": 32, "C2-B": 13, "C3-A": 20, "C3-B": 10, MAX: 43, MIN: 23 },
  { name: "01/29", "C1-A": 23, "C1-B": 26, "C2-A": 12, "C2-B": 34, "C3-A": 20, "C3-B": 10, MAX: 43, MIN: 21 },
  { name: "01/30", "C1-A": 30, "C1-B": 21, "C2-A": 34, "C2-B": 21, "C3-A": 20, "C3-B": 10, MAX: 32, MIN: 13 },
  { name: "01/31", "C1-A": 10, "C1-B": 13, "C2-A": 62, "C2-B": 32, "C3-A": 20, "C3-B": 10, MAX: 42, MIN: 12 },
];

const DensityChart = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#2D3153",
        color: "white",
        borderRadius: 5,
        textAlign: "center",
        mx: 1,
      }}
    >
      <CardContent>
        <Typography variant="h6">Density (g/ml)</Typography>
        <LineChart width={400} height={270} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="C1-A" stroke="cyan" />
          <Line type="monotone" dataKey="C1-B" stroke="lime" />
          <Line type="monotone" dataKey="C2-A" stroke="blue" />
          <Line type="monotone" dataKey="C2-B" stroke="purple" />
          <Line type="monotone" dataKey="C3-A" stroke="lightblue" />
          <Line type="monotone" dataKey="C3-B" stroke="lightgreen" />
          <Line type="monotone" dataKey="MAX" stroke="red" />
          <Line type="monotone" dataKey="MIN" stroke="orange" />
        </LineChart>

        {/* ส่วน ECP C1, C2, C3 ด้านล่าง */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "green",
              borderRadius: 2,
              px: 2,
              py: 1,
            }}
          >
            <Typography>ECP C1 Normal</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: 2,
              px: 2,
              py: 1,
            }}
          >
            <Typography>ECP C2 Trigger</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "green",
              borderRadius: 2,
              px: 2,
              py: 1,
            }}
          >
            <Typography>ECP C3 Normal</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DensityChart;
