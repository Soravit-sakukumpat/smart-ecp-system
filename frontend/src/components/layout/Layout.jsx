import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidenav from "./sidenav/Sidenav";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Navbar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 0, mt: "65px", ml: "10px", width: "full"}}>
          {/* แสดงหน้า Dashboard และหน้าอื่นๆ ตาม Route */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;