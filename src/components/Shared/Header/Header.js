import React, { useContext } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { ThemeContext } from "../../../context/ThemeProvider/ThemeProvider";

const Header = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, setUser, logOutUser } = useContext(AuthContext);
  const toggleDark = () => {
    setDark(!dark);
  };
  const logOut = () => {
    logOutUser().then(setUser(null)).catch(setUser(null));
  };
  const themeBtn = (
    <button onClick={toggleDark}>
      {dark ? (
        <ImSun className="text-4xl rounded-full bg-slate-700 text-white p-1" />
      ) : (
        <RiMoonFill className="text-4xl rounded-full border-2 text-slate-800 p-1" />
      )}
    </button>
  );
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/">About</Link>
      </li>
      <li className="font-semibold">
        <Link to="/">Services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/">Blog</Link>
      </li>
      <li className="font-semibold">
        <Link to="/register">{user?.displayName}</Link>
      </li>
      {user?.uid ? (
        <li className="font-semibold">
          <button onClick={logOut}>
            Log Out <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
          </button>
        </li>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="font-semibold">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-24 h-20" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <span className="mr-5">{themeBtn}</span>
        <Link to="/" className="btn btn-outline btn-error">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
