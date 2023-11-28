
import React, { useState,useContext } from 'react';
import { UserContext } from './Login';
import './AdminDashboard.css'; // Import a CSS file for styling
import UpdateMyInfo from './NurseComp/UpdateMyInfo';
import VaccinationUpdate from './NurseComp/VaccinationUpdate'
import MyInfoNurse from './NurseComp/MyInfoNurse';
import ScheduleNurse from './NurseComp/ScheduleNurse';
import CancelNurseTime from './NurseComp/CancelTimeslot';
// import Info from './adminComp/Info';
// import PatientInfo from './adminComp/PatientInfo';

const NurseDashboard = () => {
  const [currentSection, setCurrentSection] = useState('');
  const loggedInUser = useContext(UserContext);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="admin-dashboard">
      <h2 className ='topwriteup' >NURSE - Dashboard
      {loggedInUser && loggedInUser.name && (
          <span>  --- Welcome {loggedInUser.name}</span>
        )}
      </h2>
      <button onClick={() => handleNavigation('updateInfo')}>Update My Info</button>
      <button onClick={() => handleNavigation('schedule-time')}>Schedule Me</button>
      <button onClick={() => handleNavigation('cancel-time')}>Cancel Slot</button>
      <button onClick={() => handleNavigation('view-my-info')}>View My Info</button>
      <button onClick={() => handleNavigation('vaccination-update')}>Vaccination Update</button>

      {/* Render different sections based on the currentSection state */}
      {currentSection === 'updateInfo' && <UpdateMyInfo />}
      {currentSection === 'schedule-time' && <ScheduleNurse />}
      {currentSection === 'cancel-time' && <CancelNurseTime />}
      {currentSection === 'view-my-info' && <MyInfoNurse />}
      {currentSection === 'vaccination-update' && <VaccinationUpdate />}
      {/* {currentSection === 'view-nurse-info' && <ViewNurseInfo />}
      {currentSection === 'view-patient-info' && <ViewPatientInfo />} */}
    </div>
  );
};

// Define your different sections as separate components
// const UpdateMyInfo = () => {
//   return <div className="dashboard-section">Update My Info</div>;
// };

// const ScheduleTime = () => {
//   return <div className="dashboard-section">Schedule My Time</div>;
// };

// const CancelTime = () => {
//   return <div className="dashboard-section">Cancel my Time</div>;
// };

// const ViewMyInfo = () => {
//   return <div className="dashboard-section">View My Info</div>;
// };

// const Vaccinationupdate = () => {
//   return <div className="dashboard-section">Updating Vaccination details</div>;
// };

// const ViewNurseInfo = () => {
//   return <div className="dashboard-section">View Nurse Info Section</div>;
// };

// const ViewPatientInfo = () => {
//   return <div className="dashboard-section">View Patient Info Section</div>;
// };

export default NurseDashboard;
