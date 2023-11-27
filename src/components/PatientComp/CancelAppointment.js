import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const CancelAppointment = () => {
  const { userId, userType } = useContext(UserContext);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [message, setMessage] = useState('');

  const fetchAppointmentDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cancel-appointment/${userId}/${userType}/`, {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        setAppointmentDetails(data);
        setMessage('');
      } else {
        setAppointmentDetails(null);
        setMessage(data.message || 'Failed to fetch appointment details');
      }
    } catch (error) {
      console.error('Error fetching appointment details:', error);
    }
  };

  const handleCancelAppointment = async (apptId) => {
    try {
      const formData = new FormData();
      formData.append('appt_id', apptId);

      const response = await fetch(`http://127.0.0.1:8000/api/cancel-appointment/${userId}/${userType}/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Appointment canceled successfully');
        setAppointmentDetails(null);
      } else {
        setMessage(data.message || 'Failed to cancel appointment');
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

  return (
    <div className="cancel-appointment-section">
      <h3>Cancel Appointment Section</h3>
      <button onClick={fetchAppointmentDetails}>Get Details</button>

      {appointmentDetails && (
        <div>
          <p>Appointment Details:</p>
          <p>Appointment ID: {appointmentDetails.appt_id}</p>
          <p>Vaccine Name: {appointmentDetails.vaccine_name}</p>
          <p>Time: {appointmentDetails.timestamp}</p>
          <button onClick={() => handleCancelAppointment(appointmentDetails.appt_id)}>Cancel</button>
        </div>
      )}

      {message && <div style={{ color: 'red' }}>{message}</div>}
    </div>
  );
};

export default CancelAppointment;
