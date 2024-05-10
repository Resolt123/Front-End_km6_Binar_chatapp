import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
