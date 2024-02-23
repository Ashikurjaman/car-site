import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login.jsx";
import Register from "../Components/Auth/Register.jsx";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/logout',
          element:<Home/>
        }
      ]
    },
  ]);

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;