import { useState } from "react";
import { authService } from "../../services/authService";
import { notify } from "../../utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/authSlice";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CustomButton from "../../components/CustomButton";
import GoogleIcon from "../../assets/icons/google-logo.5867462c.svg";
import Github from "../../assets/icons/aawpwnuou.webp";
import CustomHeader from "../../components/CustomHeader";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { continueWithGoogle, isAuthenticating } = useGoogleAuth();


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const { email, password } = login;

  const onChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      notify.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await authService.login(login);
      notify.success("Login Successful");
      dispatch(setAuth(res.data.data));
      navigate("/projects");
    } catch (error) {
      notify.error(
        error.response?.data?.message || "Login failed. Please try again."
      );

      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };



  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "500px" },
          maxWidth: "600px",
        }}
      >
        <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 1 }}>
          <CardContent sx={{ padding: 3 }}>
            <Box textAlign="center" mb={4}>
              <CustomHeader title="Personal Kanban Tool" />
              <p>Log in to continue</p>
            </Box>

            {/* Email Field */}
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              sx={{ mb: 2 }}
              name="email"
              value={email}
              onChange={onChange}
            />

            {/* Password Field */}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              name="password"
              value={password}
              onChange={onChange}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CustomButton
                label="Continue"
                fullWidth
                sx={{
                  width: "500px",
                  mt: 3,
                  mb: 2,
                }}
                onClick={onSubmit}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "gray", textAlign: "center", mb: 2 }}
            >
              Or continue with:
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <CustomButton
                label="Google"
                variant="outlined"
                fullWidth
                startIcon={
                  <img
                    src={GoogleIcon}
                    alt="Google"
                    style={{ width: "23px" }}
                  />
                }
                sx={{
                  color: "#555555",
                  borderColor: "#cccccc",
                  width: "100%",
                  marginBottom: "0",
                  justifyContent: "flex-center",
                  display: "flex",
                }}
                onClick={continueWithGoogle}
              />

              <CustomButton
                label="Github"
                variant="outlined"
                // onClick={handleGithubLogin} // Add your onClick handler
                startIcon={
                  <img src={Github} alt="Github" style={{ width: "39px" }} />
                }
                sx={{
                  color: "#555555",
                  width: "100%",
                  borderColor: "#cccccc",
                  justifyContent: "flex-center",
                  display: "flex",
                }}
              />
            </Box>

            <Box display="flex" justifyContent="center" mt={3} gap={2}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: "#0052CC",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Can't log in?
              </Typography>
              <Typography
                // onClick={handleCreateAccount}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: "#0052CC",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Create an account
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Login;
