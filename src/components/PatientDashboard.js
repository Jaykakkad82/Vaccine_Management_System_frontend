import React, { useState, useContext } from 'react';
import { UserContext } from './Login';
import './AdminDashboard.css'; // Import a CSS file for styling
import PatientUpdateMyInfo from './PatientComp/PatientUpdateMyinfo';
import BookAppointment from './PatientComp/BookAppointment';
import CancelAppointment from './PatientComp/CancelAppointment';
import ViewPatientInfo from './PatientComp/ViewPatientInfo';

const PatientDashboard = () => {
  const [currentSection, setCurrentSection] = useState('');
  const loggedInUser = useContext(UserContext);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="admin-dashboard">
      <h2 className="topwriteup">
        PATIENT Dashboard
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
      {currentSection === 'schedule-time' && <BookAppointment />}
      {currentSection === 'cancel-time' && <CancelAppointment />}
      {currentSection === 'view-my-info' && <ViewPatientInfo />}
    </div>
  );
};




  export default PatientDashboard;