import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewPage from './NewPage';
import Bike1 from './Bike1';
import Bike2 from './Bike2';
import Bike3 from './Bike3';
import Bike4 from './Bike4';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/bike1" element={<Bike1 />} />
          <Route path="/bike2" element={<Bike2 />} />
          <Route path="/bike3" element={<Bike3 />} />
          <Route path="/bike4" element={<Bike4 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
