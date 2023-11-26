import React, { useState } from 'react';

const DeleteNurse = () => {
  const [nurseId, setNurseId] = useState('');
  const [message, setMessage] = useState('');

  const handleNurseIdChange = (e) => {
    setNurseId(e.target.value);
  };

  const handleDeleteNurse = async () => {
    const formData = new FormData();
    formData.append('nurse_id', nurseId);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/admin_delete_nurse/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log(data)

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage('Failed to delete nurse. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting nurse:', error);
    }
  };

  return (
    <div className="dashboard-section">
      {message && <div style={{ color: 'red' }}>{message}</div>}
      <h3>Delete Nurse Section</h3>
      <label>
        Nurse ID:
        <input type="text" value={nurseId} onChange={handleNurseIdChange} />
      </label>
      <button onClick={handleDeleteNurse}>Delete Nurse</button>
    </div>
  );
};

export default DeleteNurse;
