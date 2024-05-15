import React from "react";
// import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

// import Protected from "./components/Protected";
// import NonProtected from "./components/NonProtected";

import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
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

export default function App() {
  return (
    // <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </GoogleOAuthProvider>
    // </Provider>
  );
}
