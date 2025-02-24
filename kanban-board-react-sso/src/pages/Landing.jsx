import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Speed,
  Group,
  Devices,
  TrendingUp,
  Security,
} from "@mui/icons-material";
import landingPageLogo from "../assets/images/landing.png";
import { RocketLaunch } from "@mui/icons-material";
import { useNavigate } from "react-router";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
      <Icon sx={{ fontSize: 48, mb: 2, color: "primary.main" }} />
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Dashboard,
      title: "Visual Task Management",
      description:
        "Organize your work with intuitive drag-and-drop boards and cards",
    },
    {
      icon: Speed,
      title: "Real-time Updates",
      description:
        "See changes instantly as your team collaborates on projects",
    },
    {
      icon: Group,
      title: "Team Collaboration",
      description: "Work seamlessly with your team members across all projects",
    },
    {
      icon: Devices,
      title: "Cross-platform Access",
      description: "Access your boards from any device, anywhere, anytime",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor project progress with powerful analytics and reports",
    },
    {
      icon: Security,
      title: "Secure & Private",
      description: "Enterprise-grade security to protect your sensitive data",
    },
  ];

  return (
    <Box>
      {/* Navigation */}
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            Personal Kanban
          </Typography>
          <Box>
            <Button color="inherit" sx={{ mr: 2 }}>
              Features
            </Button>
            <Button color="inherit" sx={{ mr: 2 }}>
              Pricing
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outlined"
              color="primary"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 8,
          background: "linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Organize Your Work,
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  Master Your Flow
                </Box>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Transform your productivity with our intuitive Kanban tool.
                Perfect for individuals and teams looking to streamline their
                workflow.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mr: 2, px: 4, py: 1.5 }}
                >
                  Get Started Free
                </Button>
                <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
                  Watch Demo
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={landingPageLogo}
                alt="Kanban board preview"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose Personal Kanban?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 15 },
          overflow: "hidden",
          background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            zIndex: 1,
          },
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            width: "40%",
            height: "100%",
            top: 0,
            right: 0,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            transform: "translateX(30%)",
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.75rem" },
                fontWeight: 800,
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                mb: 1,
              }}
            >
              Ready to Get Started?
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "600px",
                mb: 2,
                lineHeight: 1.6,
              }}
            >
              Join thousands of users who are already improving their
              productivity
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunch />}
              sx={{
                px: 6,
                py: 2,
                bgcolor: "white",
                color: "primary.main",
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "50px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                "&:hover": {
                  bgcolor: "grey.100",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Start Your Free Trial
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                mt: 2,
              }}
            >
              No credit card required • 14-day free trial • Cancel anytime
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
