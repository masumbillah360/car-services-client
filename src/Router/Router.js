import { createBrowserRouter } from "react-router-dom";
import AllOrders from "../components/Pages/AllOrders/AllOrders";
import CheckOut from "../components/Pages/CheckOut/CheckOut";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import NewOrders from "../components/Pages/NewOrders/NewOrders";
import Register from "../components/Pages/Register/Register";
import ServicesCheckOut from "../components/Pages/ServicesCheckOut/ServicesCheckOut";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServicesCheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "/newoerders",
        element: (
          <PrivateRoute>
            <NewOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        ),
      },
    ],
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
