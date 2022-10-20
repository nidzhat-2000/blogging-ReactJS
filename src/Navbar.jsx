import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Nijat-Blog</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create Blog</Link>
    </nav>
  );
};
