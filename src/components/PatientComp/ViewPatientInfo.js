import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const ViewPatientInfo = () => {
  const [patientInfo, setPatientInfo] = useState(null);
  const loggedInUser = useContext(UserContext);

  const handleDisplayInfo = async () => {
    // Assuming you have an endpoint in the backend to fetch patient information
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patient-info/${loggedInUser.userId}/`, {
        method: 'GET',
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        // Successfully fetched patient information
        setPatientInfo(data);
      } else {
        // Handle error
        console.error('Error fetching patient information:', data.error);
      }
    } catch (error) {
      console.error('Error during patient information fetch:', error);
    }
  };

  return (
    <div className="view-patient-info">
      <h2>Patient Information</h2>
      <button onClick={handleDisplayInfo}>Display Info</button>
      {patientInfo && (
        <div>
          <p>ID: {patientInfo.id}</p>
          <p>Name: {patientInfo.name}</p>
          <p>Phone Number: {patientInfo.phone_number}</p>
          <p>Address: {patientInfo.address}</p>
          <p>Gender: {patientInfo.gender}</p>
          <p>Username: {patientInfo.username}</p>
          <p>Total Doses: {patientInfo.totaldoses}</p>
          <p>Race: {patientInfo.race}</p>
          <p>Occupation: {patientInfo.occup}</p>
          <p>Medical History: {patientInfo.medhistory}</p>
          <p>Schedule Times:</p>
          {Array.isArray(patientInfo.schedule_times) && patientInfo.schedule_times.length > 0 ? (
            <ul>
              {patientInfo.schedule_times.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          ) : (
            <p>No schedule times available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewPatientInfo;
