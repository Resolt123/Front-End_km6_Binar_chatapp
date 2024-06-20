import BackButton from "@/assets/back-button.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../redux/actions/auth";

export default function EditProfile() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.get("image");
    formData.append("id", user.id);
    dispatch(editProfile(formData, setIsLoading, navigate));
  };

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          color: "white",
          display: "block",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: "25px",
            mr: "16px",
            my: "16px",
          }}
          component="img"
          src={BackButton}
        />
        <span>Back to Profile</span>
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
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
                Edit Profile
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    {isLoading ? <CircularProgress size={24} /> : "Save"}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
