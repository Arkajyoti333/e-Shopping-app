import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [count, setCount] = useState(6);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <Link to="/">Azios</Link>
      </div>
      <ul className="nav-menu">
        <li className="hover">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </li>
        <li className="hover">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            Products
          </NavLink>
        </li>
        <li className="hover">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            Blog
          </NavLink>
        </li>
        <li className="hover">
          <NavLink
            to="/store"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            Store
          </NavLink>
        </li>
        <li className="hover">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            About Us
          </NavLink>
        </li>
        <li className="hover">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} `
            }
            style={{ textDecoration: "none" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className=" nav-login-cart">
        <Link to="/login" className="hover">
          <button>Login/SignUp</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{count}</div>
      </div>
    </div>
  );
};

export default Navbar;
