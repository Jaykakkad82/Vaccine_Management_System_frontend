import React, { useContext, useState } from 'react';
import { UserContext } from '../Login';

const PatientUpdateMyInfo = () => {
  const { userId, userType } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [ssn, setSSN] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [user_name, setUserName] = useState('');
  const [race, setRace] = useState('');
  const [occupation, setOccupation] = useState('');
  const [medical_history, setMedicalHistory] = useState('');
  const [message, setMessage] = useState('');

  const handleGetInfo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patient-update-info/${userId}/${userType}/`, {
        method: 'GET',
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setName(data.name || '');
        setPassword(data.password || '');
        setPhoneNumber(data.phone_number || '');
        setSSN(data.ssn || '');
        setAddress(data.address || '');
        setAge(data.age || '');
        setGender(data.gender || '');
        setUserName(data.user_name || '');
        setRace(data.race || '');
        setOccupation(data.occupation || '');
        setMedicalHistory(data.medical_history || '');
        setMessage('');
      } else {
        setMessage(data.message || 'Failed to fetch patient information');
      }
    } catch (error) {
      console.error('Error fetching patient information:', error);
    }
  };

  const handleUpdateInfo = async () => {
    const formData = new FormData();
    const phone_numberInt = parseInt(phone_number, 10);
    const ageInt = parseInt(age, 10);

    formData.append('user_id', userId);
    formData.append('name', name);
    formData.append('password', password);
    formData.append('phone_number', phone_numberInt);
    formData.append('ssn', ssn);
    formData.append('address', address);
    formData.append('age', ageInt);
    formData.append('gender', gender);
    formData.append('user_name', user_name);
    formData.append('race', race);
    formData.append('occupation', occupation);
    formData.append('medical_history', medical_history);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patient-update-info/${userId}/${userType}/`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Information updated successfully');
        // Reset form fields after successful update
        setName('');
        setPassword('');
        setPhoneNumber('');
        setSSN('');
        setAddress('');
        setAge('');
        setGender('');
        setUserName('');
        setRace('');
        setOccupation('');
        setMedicalHistory('');
      } else {
        setMessage(data.message || 'Failed to update patient information');
      }
    } catch (error) {
      console.error('Error updating patient information:', error);
    }
  };

  return (
    <div className="update-my-info-section">
      <h3>Update My Info Section</h3>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      
      <button onClick={handleGetInfo}>Get Info</button>

      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          SSN:
          <input type="text" value={ssn} onChange={(e) => setSSN(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          User Name:
          <input type="text" value={user_name} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          Race:
          <input type="text" value={race} onChange={(e) => setRace(e.target.value)} />
        </label>
        <label>
          Occupation:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </label>
        <label>
          Medical History:
          <textarea value={medical_history} onChange={(e) => setMedicalHistory(e.target.value)} />
        </label>

        <button type="button" onClick={handleUpdateInfo}>
          Update
        </button>
      </form>

      
    </div>
  );
};

export default PatientUpdateMyInfo;
