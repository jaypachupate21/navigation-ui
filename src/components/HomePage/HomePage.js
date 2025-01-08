import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';// Import NavItem component
import './HomePage.css';

// Import logo images
import dashboardLogo from '../../assets/logos/dashboard.png';
import documentControlLogo from '../../assets/logos/document-control.png';
import employeeTrainingLogo from '../../assets/logos/employee-training.png';
import complaintManagementLogo from '../../assets/logos/complaint-management.png'
import nonconformanceLogo from '../../assets/logos/nonconformance.png'
import capaLogo from '../../assets/logos/CAPA.png'
import deviationManagementLogo from '../../assets/logos/deviation-management.png'
import changeManagementLogo from '../../assets/logos/change-mangement.png'
import supplierManagementLogo from '../../assets/logos/supplier-management.png'
import auditManagementLogo from '../../assets/logos/audit-management.png'
import riskManagement from '../../assets/logos/risk-management.png'
import feedbackManagementLogo from '../../assets/logos/feedback-management.png'
import maintenanceLogo from '../../assets/logos/maintenance.png'
import validationLogo from '../../assets/logos/validation.png'
import setupLogo from '../../assets/logos/setup.png'



const navItems = [
  { name: 'Dashboard', icon: dashboardLogo, link: '/placeholder' },
  { name: 'Document Control', icon: documentControlLogo, link: '/placeholder' },
  { name: 'Employee Training', icon: employeeTrainingLogo, link: '/placeholder' },
  { name: 'Complaint Management', icon: complaintManagementLogo, link: '/placeholder' },
  { name: 'Nonconformance', icon: nonconformanceLogo, link: '/placeholder' },
  { name: 'CAPA', icon: capaLogo, link: '/placeholder' },
  { name: 'Deviation Management', icon: deviationManagementLogo, link: '/placeholder' },
  { name: 'Change Management', icon: changeManagementLogo, link: '/placeholder' },
  { name: 'Supplier Management', icon: supplierManagementLogo, link: '/placeholder' },
  { name: 'Audit Management', icon: auditManagementLogo, link: '/placeholder' },
  { name: 'Risk Management', icon: riskManagement, link: '/placeholder' },
  { name: 'Feedback Management', icon: feedbackManagementLogo, link: '/placeholder' },
  { name: 'Calibration and Maintenance', icon: maintenanceLogo, link: '/placeholder' },
  { name: 'Validation and Verification', icon: validationLogo, link: '/placeholder' },
  { name: 'Setup', icon: setupLogo, link: '/placeholder' },
];

function HomePage() {
  
  return (
    <div className="home-page">
      <h1>Web Apps</h1>
      <div className="grid-container">
        {navItems.map((item, index) => (
          <NavItem key={index} name={item.name} icon={item.icon} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
