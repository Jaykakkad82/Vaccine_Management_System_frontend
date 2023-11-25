// Nurse Info.js
import React, { useState, useEffect } from 'react';
import './table.css'

const Info = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/admin_nurses/');
        const responseData = await response.json();
        setData(responseData);
        
      } catch (error) {
        console.error(`Error fetching ${type}s:`, error);
      }
    };

    fetchData();
  }, [type]);
  console.log(data)
  return (
    <div className="dashboard-section">
      <h3>{`View Nurse Details`}</h3>
      {/* Display information in a table */}
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Scheduled times</th>
          {/* Add other table headers based on your data structure */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.emp_id}</td>
            <td>{item.name}</td>
            <td>{item.phone_number}</td>
            <td>{item.address}</td>
            <td>{item.gender}</td>
            <td>{item.scheduled_time}</td>
            {/* Add other table cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Info;
