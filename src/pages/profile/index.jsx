import {
  Avatar,
  Box,
  useTheme,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import BackButton from "@/assets/back-button.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

export default function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get profile
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      bgcolor={theme.palette.primary.light}
    >
      <Button
        sx={{ position: "absolute", top: "20px", left: "20px" }}
        onClick={handleBack}
      >
        <img width={"50px"} src={BackButton} />
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor={theme.palette.primary.main}
        padding="20px"
        border="1px solid grey"
        borderRadius="10px"
        minWidth="350px"
      >
        <Avatar
          src={user?.image}
          sx={{
            width: "200px",
            height: "200px",
            margin: "5px 0px 5px 0px",
            border: `5px solid ${theme.palette.primary.light}`,
          }}
        />
        <Typography
          variant="h6"
          color={theme.palette.text.primary}
          marginBottom={"10px"}
        >
          {user?.username}
        </Typography>
        <Divider
          sx={{ backgroundColor: "grey", width: "100%", marginBottom: "10px" }}
        />
        <Box display={"flex"} flexDirection={"row"} width={"100%"}>
          <Typography
            fontSize={"17px"}
            color={theme.palette.text.primary}
            flex={1}
          >
            Email
          </Typography>
          <Typography
            fontSize={"17px"}
            color={theme.palette.text.primary}
            flex={2}
          >
            {user?.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
