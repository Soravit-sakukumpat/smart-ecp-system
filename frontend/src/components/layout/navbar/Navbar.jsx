import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: "100%", // Navbar ลดความกว้างให้พอดีกับ Sidebar
                ml: "80px",
                backgroundColor: "#2D3153", // สีพื้นหลัง
                borderTop: 1,
                borderBottom: 1,
            }}
        >
            <Toolbar>
                <Typography
                    variant="h3"
                    sx={{
                        flexGrow: 1,
                        fontFamily: "sans-serif",
                        fontWeight: "bold", // 🔹 ทำให้ตัวหนา
                        fontStyle: "italic" // 🔹 ทำให้ตัวเอียง
                    }}
                >
                    SMART ECP SYSTEM
                </Typography>
                <Box sx={{ fontSize: "40px" }}>
                    {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;