import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', marginTop: "75px", backgroundColor: '#FF6B6B', color: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2em', color: 'white' }}>
        Quick Eats
      </Link>
      <div>
        <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none', color: 'white', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#FF8E31' }}>
          Login
        </Link>
        <Link to="/register" style={{ textDecoration: 'none', color: 'white', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#4CAF50' }}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;