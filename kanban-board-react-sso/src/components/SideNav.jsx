import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const sideMenu = [
  { text: "Projects", icon: <AssignmentIcon /> },
  { text: "Logout", icon: <LogoutIcon /> },
];

const SideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleNavigation = (path) => {
    if (path === "/logout") {
      handleLogout();
    } else {
      navigate(path);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Company Name */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#555555",
          padding: 2,
        }}
      >
        Personal Kanban
      </Typography>

      <List>
        {sideMenu.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(`/${item.text.toLowerCase()}`)}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "10px 15px",
                color:
                  location.pathname === `/${item.text.toLowerCase()}`
                    ? "#007BFF"
                    : "#555555",
                justifyContent: "flex-start",
                textAlign: "left",
                fontSize: "1.2rem",
                transition: "color 0.3s",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <Box sx={{ marginRight: "15px" }}>{item.icon}</Box>
              {item.text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "white",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideNav;
