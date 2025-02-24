import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "./components/projectTable";
import ProjectForm from "./components/projectForm";
import { useDispatch } from "react-redux";
import { clearSingleProject, fetchProjects } from "../../store/projectSlice";
import CustomButton from "../../components/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ProjectTable from "./components/projectTable";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";

function ProjectDashboard() {
  const theme = createTheme({
    typography: {
      allVariants: {
        color: "#555555",
      },
    },
  });

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    dispatch(clearSingleProject());
  };

  const handleOpenEditModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, minHeight: "100vh", margin: 0, padding: 2 }}>
        <CssBaseline />
        <Box sx={{ padding: "20px", width: "100%" }}>
          <CustomBreadcrumbs />
        </Box>
        <Toolbar />
        <CustomButton
          label="Create Project"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        />
        <hr />
        <ProjectForm open={isModalOpen} onClose={handleCloseModal} />{" "}
        {/* { list } */}
        <ProjectTable handleOpenEditModal={handleOpenEditModal} />
      </Box>
    </ThemeProvider>
  );
}

export default ProjectDashboard;
