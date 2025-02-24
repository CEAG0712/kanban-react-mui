import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";
// import TaskColumn from './components/TaskColumn';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import SideNav from "./components/SideNav";
import { useSelector } from "react-redux";
import { useState } from "react";
// import LandingPage from './components/Home';

// const theme = createTheme({
//   typography: {
//     allVariants: {
//       color: '#555555',
//     },
//   },
//   palette: {
//     primary: {
//       main: '#0052CC',
//     },
//   },
// });

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Toaster />
        {isAuthenticated && (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "none" },
                position: "absolute",
                top: "20px",
                left: "1px",
                zIndex: 1200,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              variant="temporary"
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  width: 240,
                  boxSizing: "border-box",
                },
              }}
            >
              <SideNav onClose={handleDrawerToggle} />
            </Drawer>

            <Box
              component="nav"
              sx={{
                width: 100,
                flexShrink: 0,
                display: { xs: "none", sm: "block" },
              }}
            >
              <SideNav />
            </Box>
          </>
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { xs: "100%", sm: `calc(100% - 240px)` },
            ml: { sm: !isAuthenticated ? 0 : "240px" },
          }}
        >
          <AppRoutes />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
