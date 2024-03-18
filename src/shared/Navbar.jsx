

import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../Components/Context/AuthContext";

const Navbar = () => {
  const {user,logout} = useContext(UserContext)
  const handelLogout =()=>{
    logout()
    .then(() => {
      // Sign-out successful.
      <Navigate to={'/'}></Navigate>
    }).catch((error) => {
      // An error happened.
    });
  }
  const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
       {
        user ?  <li><NavLink to={'/bookings'}>My Bookings</NavLink></li> :""
       }
        
        {
          user? <li onClick={handelLogout}><Link>logout</Link></li>:
          <li><NavLink to={'/login'}>Login</NavLink></li>
        }
  </>
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img className="w-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#service" className="btn btn-outline btn-accent">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
