import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
