import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#eee' }}>
    <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
    <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
    <Link to="/projects" style={{ margin: '0 10px' }}>Projects</Link>
    <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
  </nav>
);

export default Navbar;
