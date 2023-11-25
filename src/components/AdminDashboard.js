// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <Link to="/admin/register-nurse">Register Nurse</Link>
//       <Link to="/admin/update-nurse">Update Nurse Info</Link>
//       <Link to="/admin/delete-nurse">Delete Nurse</Link>
//       <Link to="/admin/add-vaccine">Add Vaccine</Link>
//       <Link to="/admin/update-vaccine">Update Vaccine</Link>
//       <Link to="/admin/view-nurse-info">View Nurse Info</Link>
//       <Link to="/admin/view-patient-info">View Patient Info</Link>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import './AdminDashboard.css'; // Import a CSS file for styling
import Info from './adminComp/Info';
import PatientInfo from './adminComp/PatientInfo';
import RegisterNurse from './adminComp/RegisterNurse';

const AdminDashboard = () => {
  const [currentSection, setCurrentSection] = useState('');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="admin-dashboard">
      <h2 className ='topwriteup' >ADMINISTRATOR - Dashboard</h2>
      <button onClick={() => handleNavigation('register-nurse')}>Register Nurse</button>
      <button onClick={() => handleNavigation('update-nurse')}>Update Nurse Info</button>
      <button onClick={() => handleNavigation('delete-nurse')}>Delete Nurse</button>
      <button onClick={() => handleNavigation('add-vaccine')}>Add Vaccine</button>
      <button onClick={() => handleNavigation('update-vaccine')}>Update Vaccine</button>
      <button onClick={() => handleNavigation('view-nurse-info')}>View Nurse Info</button>
      <button onClick={() => handleNavigation('view-patient-info')}>View Patient Info</button>

      {/* Render different sections based on the currentSection state */}
      {currentSection === 'register-nurse' && <RegisterNurse />}
      {currentSection === 'update-nurse' && <UpdateNurse />}
      {currentSection === 'delete-nurse' && <DeleteNurse />}
      {currentSection === 'add-vaccine' && <AddVaccine />}
      {currentSection === 'update-vaccine' && <UpdateVaccine />}
      {/* {currentSection === 'view-nurse-info' && <ViewNurseInfo />}
      {currentSection === 'view-patient-info' && <ViewPatientInfo />} */}
      {currentSection === 'view-nurse-info' && <Info type="nurse" />}
      {currentSection === 'view-patient-info' && <PatientInfo />}
    </div>
  );
};

// Define your different sections as separate components
// const RegisterNurse = () => {
//   return <div className="dashboard-section">Register Nurse Section</div>;
// };

const UpdateNurse = () => {
  return <div className="dashboard-section">Update Nurse Info Section</div>;
};

const DeleteNurse = () => {
  return <div className="dashboard-section">Delete Nurse Section</div>;
};

const AddVaccine = () => {
  return <div className="dashboard-section">Add Vaccine Section</div>;
};

const UpdateVaccine = () => {
  return <div className="dashboard-section">Update Vaccine Section</div>;
};

// const ViewNurseInfo = () => {
//   return <div className="dashboard-section">View Nurse Info Section</div>;
// };

// const ViewPatientInfo = () => {
//   return <div className="dashboard-section">View Patient Info Section</div>;
// };

export default AdminDashboard;
