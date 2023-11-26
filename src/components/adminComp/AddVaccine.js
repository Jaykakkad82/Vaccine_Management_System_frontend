import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const AddVaccine = () => {
  const [name, setName] = useState('');
  const [doseNumber, setDoseNumber] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState('');
  const [message, setMessage] = useState('');
  const loggedInUser = useContext(UserContext);

  const handleSubmit = async () => {
    // Convert doseNumber and count to integers
    const doseNumberInt = parseInt(doseNumber, 10);
    const countInt = parseInt(count, 10);

    if (isNaN(doseNumberInt) || isNaN(countInt)) {
      setMessage('Dose number and count must be valid integers');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('dose_number', doseNumberInt);
    formData.append('description', description);
    formData.append('total_count', countInt);
    formData.append('user_id', loggedInUser.userId);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/admin_add-vaccine/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Clear form fields
        setName('');
        setDoseNumber('');
        setDescription('');
        setCount('');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during vaccine addition:', error);
    }
  };

  return (
    <div className="add-vaccine-section">
      <h3>Add Vaccine</h3>
      {message && <div style={{ color: 'red' }}>{message}</div>}
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Dose Number:
          <input type="text" value={doseNumber} onChange={(e) => setDoseNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Count:
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddVaccine;
