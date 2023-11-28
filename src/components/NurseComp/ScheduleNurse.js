import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

//Note: Method - GET is to get timeslot details from backend, POST is to give timestamp details to backend.
const ScheduleNurse = () => {
  const { userId, userType } = useContext(UserContext);
  const [timeslots, setTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState('');
  const [message, setMessage] = useState('');

  const handleGetTimeslots = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/book-nurse-timeslot/${userId}/${userType}/`, {
        method: 'GET',
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setTimeslots(data.timeslots || []);             // this is assumed to be a list of timestamps {timeslots:[ts1,ts2]}
        setMessage('');
      } else {
        setMessage(data.message || 'Failed to fetch timeslots');
      }
    } catch (error) {
      console.error('Error fetching timeslots:', error);
    }
  };

  const handleBookTimeslot = async () => {
    const formData = new FormData();
    formData.append('timestamp', selectedTimeslot);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/book-nurse-timeslot/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Timeslot booked successfully');
      } else {
        setMessage(data.message || 'Failed to book timeslot');
      }
    } catch (error) {
      console.error('Error booking timeslot:', error);
    }
  };

  return (
    <div className="schedule-nurse-section">
      <h3>Schedule Nurse Section</h3>
      <button onClick={handleGetTimeslots}>Get Timeslots</button>

      {timeslots.length > 0 && (
        <div>
          <label>
            Select Timeslot:
            <select value={selectedTimeslot} onChange={(e) => setSelectedTimeslot(e.target.value)}>
              <option value="">Select</option>
              {timeslots.map((timeslot,index) => (
                <option key={index} value={timeslot}>
                  {timeslot}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <button onClick={handleBookTimeslot}>Book Timeslot</button>

      {message && <div style={{ color: 'green' }}>{message}</div>}
    </div>
  );
};

export default ScheduleNurse;
