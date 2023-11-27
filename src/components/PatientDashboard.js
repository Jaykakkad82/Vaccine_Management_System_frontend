import React, { useState, useContext } from 'react';
import { UserContext } from './Login';
import './AdminDashboard.css'; // Import a CSS file for styling
import PatientUpdateMyInfo from './PatientComp/PatientUpdateMyinfo';
// import UpdateMyInfo from './PatientComp/UpdateMyInfo';
// import ScheduleTime from './PatientComp/ScheduleTime';
// import CancelTime from './PatientComp/CancelTime';
// import ViewMyInfo from './PatientComp/ViewMyInfo';
// import Register from './PatientComp/Register';

const PatientDashboard = () => {
  const [currentSection, setCurrentSection] = useState('');
  const loggedInUser = useContext(UserContext);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="admin-dashboard">
      <h2 className="topwriteup">
        PATIENT - Dashboard
        {loggedInUser && loggedInUser.name && (
          <span> --- Welcome {loggedInUser.name}</span>
        )}
      </h2>
      
      <button onClick={() => handleNavigation('updateInfo')}>Update My Info</button>
      <button onClick={() => handleNavigation('schedule-time')}>Schedule Vaccination</button>
      <button onClick={() => handleNavigation('cancel-time')}>Cancel Schedule</button>
      <button onClick={() => handleNavigation('view-my-info')}>View My Info</button>

      {/* Render different sections based on the currentSection state */}
      
      {currentSection === 'updateInfo' && <PatientUpdateMyInfo />}
      {currentSection === 'schedule-time' && <ScheduleTime />}
      {currentSection === 'cancel-time' && <CancelTime />}
      {currentSection === 'view-my-info' && <ViewMyInfo />}
    </div>
  );
};



// const Register = () => {
//     // Add state and logic for the Register component
  
//     return (
//       <div className="dashboard-section">
//         <h3>Register</h3>
//         {/* Add form elements and logic for registration */}
//       </div>
//     );
//   };


//   const UpdateMyInfo = () => {
//     // Add state and logic for the Register component
  
//     return (
//       <div className="dashboard-section">
//         <h3>Update my Info</h3>
//         {/* Add form elements and logic for registration */}
//       </div>
//     );
//   };

  const ScheduleTime = () => {
    // Add state and logic for the Register component
  
    return (
      <div className="dashboard-section">
        <h3>Schedule Time</h3>
        {/* Add form elements and logic for registration */}
      </div>
    );
  };

  const CancelTime = () => {
    // Add state and logic for the Register component
  
    return (
      <div className="dashboard-section">
        <h3>Cancel Time</h3>
        {/* Add form elements and logic for registration */}
      </div>
    );
  };

  const ViewMyInfo = () => {
    // Add state and logic for the Register component
  
    return (
      <div className="dashboard-section">
        <h3>View My Info</h3>
        {/* Add form elements and logic for registration */}
      </div>
    );
  };


  export default PatientDashboard;