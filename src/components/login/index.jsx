import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import GoogleLogin from "../GoogleLogin";

import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  Link,
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
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
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
        fullWidth
        margin="normal"
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
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
