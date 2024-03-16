import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: '2rem' }}>Welcome to JosephsCustoms.</h1>
      <nav>
        <ul>
          <li><Link to="/new-page">Home</Link></li>
          <li><Link to="/bike1">Bike1</Link></li>
          <li><Link to="/bike2">Bike2</Link></li>
          <li><Link to="/bike3">Bike3</Link></li>
          <li><Link to="/bike4">Bike4</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
};

export default Header;