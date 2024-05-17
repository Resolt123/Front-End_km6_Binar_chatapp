import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

// import Protected from "./components/Protected";
// import NonProtected from "./components/NonProtected";

import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#262626",
      light: "#303030",
    },
    secondary: {
      main: "#F79321",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

export default function App() {
  return (
    <ReduxProvider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
        <ToastContainer theme="colored" />
      </GoogleOAuthProvider>
    </ReduxProvider>
  );
}
