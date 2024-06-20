import BackButton from "@/assets/back-button.png";
import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button onClick={() => navigate("/")}>
        <Box
          sx={{
            width: "25px",
            mr: "16px",
            my: "16px",
          }}
          component="img"
          src={BackButton}
        />
        <span>Back to Home</span>
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
        <Button
          LinkComponent={Link}
          to="/edit-profile"
          variant="contained"
          endIcon={<Edit />}
          color="secondary"
          sx={{
            my: "1rem",
          }}
        >
          Edit Profile
        </Button>
        <Avatar
          src={user?.image}
          sx={{
            width: "200px",
            height: "200px",
            margin: "5px 0px 5px 0px",
            border: `5px solid ${theme.palette.primary.light}`,
          }}
        />
        <Divider
          sx={{ backgroundColor: "grey", width: "100%", marginBottom: "10px" }}
        />
        <Box display={"flex"} flexDirection={"row"} width={"100%"}>
          <Typography
            fontSize={"17px"}
            color={theme.palette.text.primary}
            flex={1}
            sx={{
              justifySelf: "flex-end",
            }}
          >
            Name
          </Typography>
          <Typography
            fontSize={"17px"}
            color={theme.palette.text.primary}
            flex={2}
          >
            {user?.name}
          </Typography>
        </Box>
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
