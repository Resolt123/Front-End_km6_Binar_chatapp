import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function RootLayout() {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Box
        sx={{
          mb: "5rem",
        }}
      ></Box>
      <Outlet />
    </Container>
  );
}
