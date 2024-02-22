import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
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