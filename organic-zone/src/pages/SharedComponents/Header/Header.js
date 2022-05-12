import React from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="header-background">
      <div className="header-items">
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}>
            <h3 className="brand-name">Organic Zone</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}>Home</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "link")}>Contact Us</NavLink>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link" : "link")}>Blogs</NavLink>
          {user ? (
            <button className="sign-out-button" onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <NavLink
              as={Link}
              to="login"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
