import {
  Button,
  Paper,
  TextField,
  Typography,
  Box,
  useTheme,
  Grid,
  Card,
  Link,
  CardContent,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
import headerLogo from "@/assets/headerLogo.png";
import GoogleLogin from "../../components/GoogleLogin";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(register(formData, setIsLoading, navigate));
  };

  return (
    <Box width="100vw" height="115vh" bgcolor={theme.palette.primary.light}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Box mb={1} display="flex" justifyContent="center">
          <img width={"70%"} src={headerLogo} />
        </Box>
        <Grid item>
          <Card sx={{ bgcolor: theme.palette.primary.main }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h4"
                fontWeight={200}
                textAlign="center"
                color={theme.palette.primary.contrastText}
              >
                Register
              </Typography>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 800,
                  alignItems: "center",
                  gap: "1.5rem",
                }}
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <TextField
                  label="Name"
                  name="name"
                  required
                  fullWidth
                  margin="dense"
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white", // Change the text color to white
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Change the label color to white
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color to white
                      },
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Change the border color to white on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Change the border color to white when focused
                    },
                  }}
                />
                <TextField
                  label="Username"
                  name="username"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white", // Change the text color to white
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Change the label color to white
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color to white
                      },
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Change the border color to white on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Change the border color to white when focused
                    },
                  }}
                />
                <TextField
                  sx={{ "& .MuiInputBase-root": { color: "black" } }}
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white", // Change the text color to white
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Change the label color to white
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color to white
                      },
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Change the border color to white on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Change the border color to white when focused
                    },
                  }}
                />
                <TextField
                  sx={{ "& .MuiInputBase-root": { color: "black" } }}
                  label="Password"
                  name="password"
                  type="password"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white", // Change the text color to white
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Change the label color to white
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color to white
                      },
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Change the border color to white on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Change the border color to white when focused
                    },
                  }}
                />
                <TextField
                  label="Profile Image"
                  name="image"
                  type="file"
                  required
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "white", // Change the text color to white
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Change the label color to white
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color to white
                      },
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Change the border color to white on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Change the border color to white when focused
                    },
                  }}
                />
                <Box sx={{ textAlign: "center", width: "100%" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="large"
                    fullWidth
                    disabled={isLoading}
                  >
                    {isLoading ? <CircularProgress size={24} /> : "Register"}
                  </Button>
                </Box>
                
                <Box sx={{ textAlign: "center", width: "100%" }}>
                  <GoogleLogin text="Register with Google" />
                </Box>
                <Typography align="center">
                  Already have account?{" "}
                  <Link
                    component={RouterLink}
                    to="/login"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": { color: "gray" },
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
