// PatientInfo.js
import React, { useState, useEffect } from 'react';
import './table.css'

const PatientInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/admin_patientinfo/');
        const patientData = await response.json();
        setData(patientData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatientData();
  }, []);

  console.log(data)

  return (
    <div className="dashboard-section">
      <h3>View Patient Info Section</h3>
      {/* Display patient information in a table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Race</th>
            <th>Previous Doses</th>
            <th>Next Appointment</th>
            {/* Add other table headers based on the patient data structure */}
          </tr>
        </thead>
        <tbody>
          {data.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.race}</td>
              <td>{patient.prev_doses}</td>
              <td>{patient.next_appointment}</td>
              {/* Add other table cells based on the patient data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientInfo;
