import React from 'react';
import bike2 from './bike2.jpg'; 

function Bike2() {
  return (
    <div style={containerStyle}>
      <h1>Bike 2 Details</h1>
      <p>Description of Bike 2....</p>
      <div style={imageContainerStyle}>
        <img src={bike2} alt="Bike 2" style={imageStyle} />
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  width: '50%', 
};

export default Bike2;
