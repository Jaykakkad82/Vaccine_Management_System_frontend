// RegisterNurse.js
import React, { useState } from 'react';

const RegisterNurse = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send data to the backend
    const formData = new FormData();
    formData.append('name', name);
    formData.append('employee_id', employeeId);
    formData.append('age', age);
    formData.append('phone_number', phoneNumber);
    formData.append('gender', gender);
    formData.append('address', address);

    try {
      // Send the data to the backend using fetch or your preferred method
      const response = await fetch('http://127.0.0.1:8000/api/admin_register_nurse/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Nurse registered successfully');
        // You can add further actions like redirecting or showing a success message
      } else {
        console.error('Failed to register nurse');
      }
    } catch (error) {
      console.error('Error during nurse registration:', error);
    }
  };

  return (
    <div className="dashboard-section">
      <h3>Register Nurse Section</h3>
      {/* Nurse registration form */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Employee ID:
          <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterNurse;
