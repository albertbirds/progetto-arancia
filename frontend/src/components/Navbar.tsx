import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f2f2f2' }}>
      <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
      <Link to="/dashboard" style={{ margin: '0 1rem' }}>Dashboard</Link>
      <Link to="/team" style={{ margin: '0 1rem' }}>Team</Link>
      <Link to="/leaderboard" style={{ margin: '0 1rem' }}>Leaderboard</Link>
      <Link to="/admin" style={{ margin: '0 1rem' }}>Admin</Link>
    </nav>
  );
};

export default Navbar;
