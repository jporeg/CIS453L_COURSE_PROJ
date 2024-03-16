import React from 'react';
import bike3 from './bike3.jpg'; 

function Bike3() {
  return (
    <div style={containerStyle}>
      <h1>Bike 3 Details</h1>
      <p>Description of Bike 3....</p>
      <div style={imageContainerStyle}>
        <img src={bike3} alt="Bike 3" style={imageStyle} />
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

export default Bike3;
