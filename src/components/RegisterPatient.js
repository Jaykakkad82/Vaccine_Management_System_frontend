import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling


const RegisterPatient = ({ setRegisterPatient }) => {
    const [registrationMessage, setRegistrationMessage] = useState('');
  // Add state for other registration fields
  const [name, setName] = useState('');
  const [ssn, setSSN] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [occupation, setOccupation] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleRegister = async () => {
    // Implement logic to send registration data to the backend
    // You can use fetch or any other method to send a POST request with registration data
    // After successful registration, you can display a message and reset the form
    const formData = new FormData();
formData.append('name', name);
formData.append('username', username);
formData.append('password', password);
formData.append('ssn', ssn);
formData.append('age', age);
formData.append('gender', gender);
formData.append('race', race);
formData.append('occupation', occupation);
formData.append('medicalHistory', medicalHistory);
formData.append('phoneNumber', phoneNumber);
formData.append('address', address);
    const response = await fetch('http://127.0.0.1:8000/api/register-patient/', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      // Registration successful
      console.log('Registration successful:', data.message);
      const successMessage = data.message;
      // Set the registration message state for display
      setRegistrationMessage(successMessage);
      // You can display a success message or redirect the user to another page
    } else {
      // Registration failed
      console.error('Registration failed:', data.message);
      const errorMessage = data.message;
      // Set the registration message state for display
      setRegistrationMessage(errorMessage);
      // You can display an error message or handle the failure accordingly
    }

    // Reset the form fields after registration
    setName('');
    setSSN('');
    setAge('');
    setGender('');
    setRace('');
    setOccupation('');
    setMedicalHistory('');
    setPhoneNumber('');
    setAddress('');
    setusername('');
    setpassword('');



  };

  return (
    <div className="registration-form">
      <h2 style={{ fontSize: '35px', fontWeight: 'bold' }}>Register as New Patient</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          User name:
          <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
        </label>
        <br />
        
        <label>
          Password:
          <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
        </label>
        
        <br />
        <label>
          SSN:
          <input type="text" value={ssn} onChange={(e) => setSSN(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <br />
        <label>
          Race:
          <input type="text" value={race} onChange={(e) => setRace(e.target.value)} />
        </label>
        <br />
        <label>
          Occupation:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </label>
        <br />
        <label>
          Medical History:
          <textarea value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        {registrationMessage && <p>{registrationMessage}</p>}
        {/* Button to submit the registration form */}
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        {/* Button to go back to the login form */}
        <button type="button" onClick={() => setRegisterPatient(false)}>
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default RegisterPatient;
