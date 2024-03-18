import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login.jsx";
import Register from "../Components/Auth/Register.jsx";
import Checkout from "../Components/Pages/Checkout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyBookings from "../Components/Pages/MyBookings.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Home />,
      },
      {
        path: "checkout/:id",
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path:"/bookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        
      },
    ],
  },
]);

const Router = () => {
  return <div></div>;
};

export default Router;
