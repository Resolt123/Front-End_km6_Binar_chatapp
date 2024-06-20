import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import GoogleLogin from "../GoogleLogin";

import {
  Box,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(navigate, email, password, setIsLoading));
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ width: "100%", maxWidth: 300, mx: "auto" }}
    >
      <TextField
        fullWidth
        margin="normal"
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{
          // Root class for the input field
          "& .MuiOutlinedInput-root": {
            color: "white",
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.main",
              borderWidth: "2px",
            },
          },
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "secondary.main",
            fontWeight: "bold",
          },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{
          // Root class for the input field
          "& .MuiOutlinedInput-root": {
            color: "white",
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.main",
              borderWidth: "2px",
            },
          },
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "secondary.main",
            fontWeight: "bold",
          },
        }}
      />
      <Box sx={{ textAlign: "center", mt: 2, mb: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          size="large"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Box>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <GoogleLogin text="Login with Google" />
      </Box>
      <Typography align="center">
        Don't have an account yet?{" "}
        <Link
          component={RouterLink}
          to="/register"
          sx={{
            color: "white",
            fontWeight: "bold",
            "&:hover": { color: "gray" },
          }}
        >
          Register
        </Link>
      </Typography>
    </Box>
  );
}
