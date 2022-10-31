import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> }],
  },
  {
    path: "/login",
    element: <Secondary></Secondary>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <Secondary></Secondary>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
