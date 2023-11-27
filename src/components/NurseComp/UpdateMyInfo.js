// UpdateMyInfo.js

import React, { useContext, useState } from 'react';
import { UserContext } from '../Login';

const UpdateMyInfo = () => {
  const { userId, userType } = useContext(UserContext);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleGetInfo = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/get-nurse-info/${userId}/${userType}/`, {
        method: 'GET',
        });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setAddress(data.address || ''); // Set to empty string if data.address is null
        setPhoneNumber(data.phone_number || ''); // Set to empty string if data.phone_number is null
        setMessage('');
      } else {
        setMessage(data.message || 'Failed to fetch nurse information');
      }
    } catch (error) {
      console.error('Error fetching nurse information:', error);
    }
  };

  const handleUpdateInfo = async () => {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('user_type', userType);
    formData.append('address', address);
    formData.append('phone_number', phoneNumber);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get-nurse-info/${userId}/${userType}/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Information updated successfully');
        setAddress('');
        setPhoneNumber('');
      } else {
        setMessage(data.message || 'Failed to update nurse information');
      }
    } catch (error) {
      console.error('Error updating nurse information:', error);
    }
  };

  return (
    <div className="update-my-info-section">
      <h3>Update My Info Section</h3>
      <button onClick={handleGetInfo}>Get Info</button>

      <form>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <button type="button" onClick={handleUpdateInfo}>
          Update
        </button>
      </form>

      {message && <div style={{ color: 'green' }}>{message}</div>}
    </div>
  );
};

export default UpdateMyInfo;
