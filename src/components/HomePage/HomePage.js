import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Dashboard, DocumentScanner, People, Warning, Build, Verified, Feedback, TaskAlt, ReportProblem, FactCheck, Factory, ChangeCircle, CompareArrows, BuildCircle} from '@mui/icons-material';

const navItems = [
  { name: 'Dashboard', icon: <Dashboard />, link: '/placeholder' },
  { name: 'Document Control', icon: <DocumentScanner />, link: '/placeholder' },
  { name: 'Employee Training', icon: <People />, link: '/placeholder' },
  { name: 'Complaint Management', icon: <Warning />, link: '/placeholder' },
  { name: 'Nonconformance', icon: <TaskAlt />, link: '/placeholder' },
  { name: 'CAPA', icon: <BuildCircle />, link: '/placeholder' },
  { name: 'Deviation Management', icon: <CompareArrows />, link: '/placeholder' },
  { name: 'Change Management', icon: <ChangeCircle />, link: '/placeholder' },
  { name: 'Supplier Management', icon: <Factory />, link: '/placeholder' },
  { name: 'Audit Management', icon: <FactCheck />, link: '/placeholder' },
  { name: 'Risk Management', icon: <ReportProblem />, link: '/placeholder' },
  { name: 'Feedback Management', icon: <Feedback />, link: '/placeholder' },
  { name: 'Calibration and Maintenance', icon: <Build />, link: '/placeholder' },
  { name: 'Validation and Verification', icon: <Verified />, link: '/placeholder' },
  { name: 'Setup', icon: <Build />, link: '/placeholder' },
];

function HomePage() {
  return (
    <div className="home-page">
      <h1>Web Apps</h1>
      <div className="grid-container">
        {navItems.map((item, index) => (
          <Link to={item.link} key={index} className="grid-item">
            <div className="icon">{item.icon}</div>
            <span className="label">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;