import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import PlaceholderPage from './components/PlaceholderPage/PlaceholderPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/placeholder" element={<PlaceholderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
