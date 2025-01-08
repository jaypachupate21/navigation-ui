import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage/HomePage.css'; 

function NavItem({ name, icon, link }) {
  return (
    <Link to={link} className="grid-item">
      <div className="icon">
        <img src={icon} alt={name} />
      </div>
      <span className="label">{name}</span>
    </Link>
  );
}

export default NavItem;
