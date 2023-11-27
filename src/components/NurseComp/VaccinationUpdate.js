import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const VaccinationUpdate = () => {
  const [apptId, setApptId] = useState('');
  const [message, setMessage] = useState('');

  const loggedInUser = useContext(UserContext);

  const handleCompleteVaccination = async () => {
    const formData = new FormData();
    formData.append('user_id', loggedInUser.userId);
    formData.append('user_type', loggedInUser.userType);
    formData.append('appt_id', apptId);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/record-appt/nurse/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Successful vaccination completion
        setMessage(data.message);
        
      } else {
        // Failed vaccination completion
        setMessage(data.message);
      }

      // Reset the form field after the request
      setApptId('');
    } catch (error) {
      console.error('Error during vaccination completion:', error);
    }
  };

  return (
    <div className="update-vaccine-form">
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Update Vaccine</h2>
      <label>
        Appointment ID:
        <input type="text" value={apptId} onChange={(e) => setApptId(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleCompleteVaccination}>
        Vaccination Complete
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VaccinationUpdate;
