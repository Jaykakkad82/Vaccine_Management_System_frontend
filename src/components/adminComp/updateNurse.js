import React, { useState } from 'react';

const UpdateNurse = () => {
  const [nurseId, setNurseId] = useState('');
  const [nurseDetails, setNurseDetails] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    // Initialize with default values or leave empty
    name: '',
    user_name: '',
    password: '',
    age: 0,
    gender: '',
    // Add other fields as needed
  });
  const [message, setMessage] = useState('');

  const handleNurseIdChange = (e) => {
    setNurseId(e.target.value);
  };

  const handleDetailsChange = (e) => {
    let value;
  
    if (e.target.type === 'number') {
      value = parseInt(e.target.value, 10);
    } else {
      value = e.target.value;
    }
  
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: value,
    });
  };
  

  const handleGetDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin-update-nurse-details/${nurseId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nurseId }),
      });
  
      const data = await response.json();

      console.log(data);
  
      if (response.ok) {
        setNurseDetails(data);
        setMessage('');
              // Populate updatedDetails with data received from backend
      setUpdatedDetails({
        name: data.name,
        user_name: data.user_name,
        password: data.password,
        age: data.age,
        gender: data.gender,
        // Add other fields as needed
      });
        console.log(nurseDetails)
      } else {
        setNurseDetails(null);
        setMessage('Nurse not found');
      }
    } catch (error) {
      console.error('Error fetching nurse details:', error);
    }
  };
  

  const handleUpdateDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin-update-nurse-details/${nurseId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({updatedDetails }),
      });
  
      if (response.ok) {
        setMessage('Information updated');
      } else {
        setMessage('Update failed');
      }
    } catch (error) {
      console.error('Error updating nurse details:', error);
    }
  };
  

  return (
<div className="dashboard-section">
  {message && <div style={{ color: 'red' }}>{message}</div>}
  <h3>Update Nurse Info Section</h3>
  <label>
    Nurse ID:
    <input type="text" value={nurseId} onChange={handleNurseIdChange} />
  </label>
  <button onClick={handleGetDetails}>Get Details</button>

  {nurseDetails && (
    <form>
      {/* Display Nurse details in the form */}
      <label>
        Name:
        <input type="text" name="name" value={updatedDetails.name} onChange={handleDetailsChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={updatedDetails.age} onChange={handleDetailsChange} />
      </label>
      <label>
        Gender:
        <input type="text" name="gender" value={updatedDetails.gender} onChange={handleDetailsChange} />
      </label>
      <label>
        User Name:
        <input type="text" name="user_name" value={updatedDetails.user_name} onChange={handleDetailsChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={updatedDetails.password} onChange={handleDetailsChange} />
      </label>

      {/* Add other fields as needed */}
      <button type="button" onClick={handleUpdateDetails}>
        Update
      </button>
    </form>
  )}
</div>

  );
};

export default UpdateNurse;
