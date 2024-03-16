import React from 'react';
import bike4 from './bike4.jpg'; 

function Bike4() {
  return (
    <div style={containerStyle}>
      <h1>Bike 4 Details</h1>
      <p>Description of Bike 4....</p>
      <div style={imageContainerStyle}>
        <img src={bike4} alt="Bike 4" style={imageStyle} />
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

export default Bike4;
