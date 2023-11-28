import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const CancelNurseTime = () => {
  const { userId, userType } = useContext(UserContext);
  const [bookedTimeslots, setBookedTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState('');
  const [message, setMessage] = useState('');

  const handleSeeMyTimeslots = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/nurse-cancel-timeslots/${userId}/${userType}/`, {
        method: 'GET',
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setBookedTimeslots(data || []);
        setMessage('');
      } else {
        setMessage(data.message || 'Failed to fetch booked timeslots');
      }
    } catch (error) {
      console.error('Error fetching booked timeslots:', error);
    }
  };

  const handleCancelTimeslot = async () => {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('user_type', userType);
    formData.append('timestamp', selectedTimeslot);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/nurse-cancel-timeslots/${userId}/${userType}/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Timeslot canceled successfully');
      } else {
        setMessage(data.message || 'Failed to cancel timeslot');
      }
    } catch (error) {
      console.error('Error canceling timeslot:', error);
    }
  };

  return (
    <div className="cancel-nurse-time-section">
      <h3>Cancel Nurse Time Section</h3>
      <button onClick={handleSeeMyTimeslots}>See My Timeslots</button>

      {bookedTimeslots.length >= 0 && (
        <div>
          <label>
            Select Timeslot to Cancel:
            <select value={selectedTimeslot} onChange={(e) => setSelectedTimeslot(e.target.value)}>
              <option value="">Select</option>
              {bookedTimeslots.map((timeslot,index) => (
                <option key={index} value={timeslot}>
                  {timeslot}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <button onClick={handleCancelTimeslot}>Cancel Timeslot</button>

      {message && <div style={{ color: 'red' }}>{message}</div>}
    </div>
  );
};

export default CancelNurseTime;
