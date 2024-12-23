import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceholderPage.css';

function PlaceholderPage() {
  return (
    <div className="placeholder-page">
      <h1>Page Under Construction</h1>
      <p>The requested page is not yet available.</p>
      <Link to="/" className="back-button">
        Go Back to Home
      </Link>
    </div>
  );
}

export default PlaceholderPage;