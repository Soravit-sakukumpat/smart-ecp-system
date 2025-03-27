import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, History, Search, Newspaper, Science, AccessTime, Opacity, Settings} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { icon: <Home />, path: "/" },
    { icon: <History />, path: "/history" },
    { icon: <Search />, path: "/tracking" },
    { icon: <Newspaper />, path: "/parameter" },
    { icon: <Science />, path: "/chemicalusage" },
    { icon: <AccessTime />, path: "/ecptimealert" },
    { icon: <Opacity />, path: "/incomingwater" },
    { icon: <Settings />, path: "/settings" }
];

const Sidenav = () => {
    const location = useLocation();
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 80,
                height: "100vh",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end", // 🔹 ดัน Sidenav ไปติดด้านล่าง
                "& .MuiDrawer-paper": {
                    width: 80,
                    height: "100vh",
                    backgroundColor: "#2D3153",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRight: "1px solid #ffffff",
                    paddingTop: 2, // 🔹 เพิ่ม Padding ด้านบน
                    paddingBottom: 2, // 🔹 เพิ่ม Padding ด้านล่าง
                    marginTop: "4.1rem", // 🔹 ปรับ Padding ด้านล่าง
                }
            }}
        >
            <List sx={{ padding: 0, width: "100%" }}>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{
                                display: "flex",
                                flexDirection: "column", // 🔹 จัดให้อยู่ตรงกลางแนวตั้ง
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                minHeight: 80, // 🔹 กำหนดขนาดให้เท่ากันทุกปุ่ม
                                color: location.pathname === item.path ? "#00E0FF" : "white",
                                "&:hover": { color: "#00E0FF" }
                            }}
                        >
                            <ListItemIcon sx={{ color: "inherit", minWidth: "auto", marginBottom: 0.5 }}>
                                {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};


export default Sidenav;