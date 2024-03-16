import React from 'react';
import bike1 from './bike1.jpg'; 

function Bike1() {
  return (
    <div style={containerStyle}>
      <h1>Bike 1 Details</h1>
      <p>Description of Bike 1....</p>
      <div style={imageContainerStyle}>
        <img src={bike1} alt="Bike 1" style={imageStyle} />
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

export default Bike1;
