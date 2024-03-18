import  { useContext } from "react";
import { UserContext } from "../Components/Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return (
      <div className="relative mb-20">
        <div className=" flex flex-col items-center justify-center mx-auto gap-4 w-96">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
