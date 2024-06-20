import headerLogo from "@/assets/headerLogo.png";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LoginComponent from "../../components/login";

export default function Login() {
  const theme = useTheme();
  return (
    <Box width="100vw" height="100vh" bgcolor="#303030">
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
          <Card sx={{ bgcolor: "#262626" }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h4"
                fontWeight={200}
                textAlign="center"
                color={theme.palette.primary.contrastText}
              >
                Login
              </Typography>
              <LoginComponent />
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
