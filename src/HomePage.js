import React from 'react';
import { Link } from 'react-router-dom'; 
import pic1 from './pic1.jpg'; 

function HomePage() {
  return (
    <div>
      <Link to="/new-page"> 
        <img src={pic1} alt="Welcome Image" /> 
      </Link>
    </div>
  );
}

export default HomePage;
