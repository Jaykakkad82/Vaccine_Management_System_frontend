
import React, { useContext,useState } from 'react';
import { UserContext } from './Login';
import './AdminDashboard.css'; // Import a CSS file for styling
import Info from './adminComp/Info';
import PatientInfo from './adminComp/PatientInfo';
import RegisterNurse from './adminComp/RegisterNurse';
import UpdateNurse from './adminComp/updateNurse';
import DeleteNurse from './adminComp/DeleteNurse';

const AdminDashboard = () => {
const loggedInUser = useContext(UserContext);
  const [currentSection, setCurrentSection] = useState('');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="admin-dashboard">
      {/* <h2 className='topwriteup'>Welcome {loggedInUser.name} - ADMINISTRATOR Dashboard</h2> */}
      <h2 className='topwriteup'>
        ADMINISTRATOR Dashboard
        {loggedInUser && loggedInUser.name && (
          <span>  --- Welcome {loggedInUser.name}</span>
        )}
      </h2>
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

const AddVaccine = () => {
  return <div className="dashboard-section">Add Vaccine Section</div>;
};

const UpdateVaccine = () => {
  return <div className="dashboard-section">Update Vaccine Section</div>;
};

export default AdminDashboard;
