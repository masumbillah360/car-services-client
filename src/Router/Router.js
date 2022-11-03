import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/Pages/CheckOut/CheckOut";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import NewOrders from "../components/Pages/NewOrders/NewOrders";
import Register from "../components/Pages/Register/Register";
import ServicesCheckOut from "../components/Pages/ServicesCheckOut/ServicesCheckOut";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/services/:id",
        element: <ServicesCheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "/newoerders",
        element: <NewOrders />,
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
