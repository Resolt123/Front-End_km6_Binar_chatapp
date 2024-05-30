import React from "react";
import {
  useTheme,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import LoginComponent from "../../components/Login";
import headerLogo from "@/assets/headerLogo.png";

export default function Login() {
  const theme = useTheme();
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
