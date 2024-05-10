import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from "./pages/login";

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
  return <RouterProvider router={router} />;
}
