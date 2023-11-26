import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const UpdateVaccine = () => {
  const [vaccineId, setVaccineId] = useState('');
  const [newCount, setNewCount] = useState('');
  const [message, setMessage] = useState('');

  const loggedInUser = useContext(UserContext);

  const handleUpdate = async () => {
    try {
        const formData = new FormData();
        formData.append('user_id', loggedInUser.userId);
        formData.append('vaccine_id', parseInt(vaccineId, 10));
        formData.append('new_count', parseInt(newCount, 10));
    
        const response = await fetch('http://127.0.0.1:8000/api/admin_update-vaccine/', {
          method: 'POST',
          body: formData,
        });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage('Update failed');
      }
    } catch (error) {
      console.error('Error updating vaccine details:', error);
    } finally {
      // Reset the form fields after submission
      setVaccineId('');
      setNewCount('');
    }
  };

  return (
    <div className="update-vaccine-section">
      {message && <div style={{ color: 'red' }}>{message}</div>}
      <h3>Update Vaccine Info Section</h3>
      <label>
        Vaccine ID:
        <input type="number" value={vaccineId} onChange={(e) => setVaccineId(e.target.value)} />
      </label>
      <br />
      <label>
        New Count:
        <input type="number" value={newCount} onChange={(e) => setNewCount(e.target.value)} />
      </label>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateVaccine;
