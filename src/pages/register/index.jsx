import headerLogo from "@/assets/headerLogo.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import { register } from "../../redux/actions/auth";

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
    <Box width="100vw" height="100vh" bgcolor={theme.palette.primary.light}>
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
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                        },
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "secondary.main",
                      },
                    },
                  }}
                />
                <TextField
                  label="Username"
                  name="username"
                  required
                  fullWidth
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                        },
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "secondary.main",
                      },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                        },
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "secondary.main",
                      },
                    },
                  }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  required
                  fullWidth
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                        },
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "secondary.main",
                      },
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
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.main",
                        },
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "secondary.main",
                      },
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
