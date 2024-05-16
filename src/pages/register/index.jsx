import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/auth";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(register(formData, setIsLoading, navigate));
  };

  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          mb: "2rem",
        }}
        variant="h4"
      >
        Register Form
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <TextField label="Name" name="name" required fullWidth margin="dense" />
        <TextField label="Username" name="username" required fullWidth />
        <TextField label="Email" name="email" type="email" required fullWidth />
        <TextField
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
        />
        <TextField
          label="Profile Image"
          name="image"
          type="file"
          required
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" type="submit">
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Paper>
  );
}
