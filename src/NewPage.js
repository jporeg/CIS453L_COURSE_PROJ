import React from 'react';
import { Link } from 'react-router-dom';
import bike1 from './bike1.jpg'; 
import bike2 from './bike2.jpg'; 
import bike3 from './bike3.jpg'; 
import bike4 from './bike4.jpg'; 

function NewPage() {
  return (
    <div style={containerStyle}>
      <p>Click on a motorcycle for more information.</p>
      <div style={gridContainerStyle}>
        <div style={rowStyle}>
          <Link to="/bike1" style={gridItemStyle}> 
            <img src={bike1} alt="Bike 1" style={imageStyle} />
          </Link>
          <Link to="/bike2" style={gridItemStyle}> 
            <img src={bike2} alt="Bike 2" style={imageStyle} />
          </Link>
        </div>
        <div style={rowStyle}>
          <Link to="/bike3" style={gridItemStyle}> 
            <img src={bike3} alt="Bike 3" style={imageStyle} />
          </Link>
          <Link to="/bike4" style={gridItemStyle}> 
            <img src={bike4} alt="Bike 4" style={imageStyle} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
};

const gridContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px', 
};

const gridItemStyle = {
  margin: '0 10px', 
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
};

export default NewPage;
