import React from 'react';
import '../styles/header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <Link to="/" className="logo">My-Blog</Link>

    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
  )
}

export default Header