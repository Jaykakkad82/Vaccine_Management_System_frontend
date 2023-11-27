import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const MyInfoNurse = () => {
  const [nurseInfo, setNurseInfo] = useState(null);
  const loggedInUser = useContext(UserContext);

  const handleDisplayInfo = async () => {
    // Assuming you have an endpoint in the backend to fetch nurse information
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/nurse-info/${loggedInUser.userId}/`, {
        method: 'GET',
      });

      const data = await response.json();

      console.log(data)

      if (response.ok) {
        // Successfully fetched nurse information
        setNurseInfo(data);
      } else {
        // Handle error
        console.error('Error fetching nurse information:', data.message);
      }
    } catch (error) {
      console.error('Error during nurse information fetch:', error);
    }
  };

  return (
    <div className="myinfo-nurse">
      <h2>Nurse Information</h2>
      <button onClick={handleDisplayInfo}>Display Info</button>
      {nurseInfo && (
        <div>
          <p>Employee ID: {nurseInfo.emp_id}</p>
          <p>Name: {nurseInfo.name}</p>
          <p>Age: {nurseInfo.age}</p>
          <p>Phone Number: {nurseInfo.phone_number}</p>
          <p>Address: {nurseInfo.address}</p>
          <p>Username: {nurseInfo.username}</p>
          {/* Display other nurse information fields as needed */}
          {/* <p>Schedule Times:</p>
          <ul>
            {nurseInfo.schedule_time.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul> */}
          <p>Schedule Times:</p>
            {Array.isArray(nurseInfo.scheduleTimes) && nurseInfo.scheduleTimes.length > 0 ? (
            <ul>
                {nurseInfo.scheduleTimes.map((time, index) => (
                <li key={index}>{time}</li>
                ))}
            </ul>
            ) : (
            <p>No time scheduled.</p>
            )}
        </div>
      )}
    </div>
  );
};

export default MyInfoNurse;
