// // BookAppointment.js

// import React, { useState, useContext } from 'react';
// import { UserContext } from '../Login';

// const BookAppointment = () => {
//   const { userId, userType } = useContext(UserContext);
//   const [vaccineData, setVaccineData] = useState([]);
//   const [selectedVaccine, setSelectedVaccine] = useState('');
//   const [scheduleData, setScheduleData] = useState([]);
//   const [message, setMessage] = useState('');
//   const [apptId, setApptId] = useState('');

//   const handleGetAppointments = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/api/patient-schedule-appt/${userId}/${userType}/`, {
//         method: 'POST',
//       });

//       const data = await response.json();
//       console.log(data);
//       console.log(data.vaccine_data)

//       if (response.ok) {
//         setVaccineData(data.vaccine_data || []);
//         setScheduleData(data.schedule_data || []);
//         setMessage('');
//         setApptId('');
//       } else {
//         setMessage(data.message || 'Failed to fetch appointments');
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const handleSelectVaccine = (vaccineId) => {
//     setSelectedVaccine(vaccineId);
//   };

//   const handleBookAppointment = async (timestamp) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/api/patient-schedule-appt/${userId}/${userType}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           vaccine_id: selectedVaccine,
//           timestamp: timestamp,
//         }),
//       });

//       const data = await response.json();
//       console.log(data)

//       if (response.ok) {
//         setMessage(data.message || 'Appointment booked successfully');
//         setApptId(data.appt_id || '');
//       } else {
//         setMessage(data.message || 'Failed to book appointment');
//       }
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//     }
//   };

//   return (
//     <div className="book-appointment-section">
//       <h3>Book Appointment Section</h3>
//       <button onClick={handleGetAppointments}>Get Appointments</button>

//       {vaccineData.length > 0 && (
//         <div>
//           <label>
//             Select Vaccine:
//             <select value={selectedVaccine} onChange={(e) => handleSelectVaccine(e.target.value)}>
//               <option value="">Select</option>
//               {vaccineData.map((vaccine) => (
//                 <option key={vaccine.id} value={vaccine.id}>
//                   {vaccine.vaccine_name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//       )}

//       {scheduleData.length > 0 && (
//         <div>
//           <p>Available Schedules:</p>
//           <div className="schedule-buttons">
//             {scheduleData.map((schedule) => (
//               <button
//                 key={schedule.timestamp}
//                 onClick={() => handleBookAppointment(schedule.timestamp)}
//               >
//                 {schedule.timestamp}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {message && <div style={{ color: 'green' }}>{message}</div>}
//       {apptId && <div style={{ color: 'blue' }}>Appointment ID: {apptId}</div>}
//     </div>
//   );
// };

// export default BookAppointment;


// BookAppointment.js

import React, { useState, useContext } from 'react';
import { UserContext } from '../Login';

const BookAppointment = () => {
  const { userId, userType } = useContext(UserContext);
  const [vaccineData, setVaccineData] = useState([]);
  const [selectedVaccine, setSelectedVaccine] = useState('');
  const [scheduleData, setScheduleData] = useState([]);
  const [message, setMessage] = useState('');
  const [apptId, setApptId] = useState('');

  const handleGetAppointments = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patient-schedule-appt/${userId}/${userType}/`, {
        method: 'POST',
      });

      const data = await response.json();
      console.log(data);
      console.log(data.vaccine_data);

      if (response.ok) {
        setVaccineData(data.vaccine_data || []);
        setScheduleData(data.schedule_data || []);
        setMessage('');
        setApptId('');
      } else {
        setMessage(data.message || 'Failed to fetch appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleSelectVaccine = (vaccineId) => {
    setSelectedVaccine(vaccineId);
  };

  const handleBookAppointment = async (timestamp) => {
    try {
        const formData = new FormData();
        formData.append('vaccine_id', Number(selectedVaccine));
        formData.append('timestamp', timestamp);
      
        const response = await fetch(`http://127.0.0.1:8000/api/patient-schedule-appt/${userId}/${userType}/`, {
          method: 'PUT',
          body: formData,
        });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setMessage(data.message || 'Appointment booked successfully');
        setApptId(data.appt_id || '');
      } else {
        setMessage(data.message || 'Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="book-appointment-section">
      <h3>Book Appointment Section</h3>
      <button onClick={handleGetAppointments}>Get Appointments</button>

      {vaccineData.length > 0 && (
        <div>
          <label>
            Select Vaccine:
            <select value={selectedVaccine} onChange={(e) => handleSelectVaccine(e.target.value)}>
              <option value="">Select</option>
              {vaccineData.map((vaccine) => (
                <option key={vaccine[0]} value={vaccine[0]}>
                  {vaccine[1]}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* {scheduleData.length > 0 && (
        <div>
          <p>Available Schedules:</p>
          <div className="schedule-buttons">
            {scheduleData.map((schedule) => (
              <button
                key={schedule.timestamp}
                onClick={() => handleBookAppointment(schedule.timestamp)}
              >
                {schedule.timestamp}
              </button>
            ))}
          </div>
        </div>
      )} */}
      {scheduleData.length > 0 && (
  <div>
    <p>Available Schedules:</p>
    <div>
      <label>
        Select Schedule:
        <select onChange={(e) => handleBookAppointment(e.target.value)}>
          <option value="">Select</option>
          {scheduleData.map((schedule, index) => (
            <option key={index} value={schedule}>
              {schedule}
            </option>
          ))}
        </select>
      </label>
    </div>
  </div>
)}

      {message && <div style={{ color: 'green' }}>{message}</div>}
      {apptId && <div style={{ color: 'blue' }}>Appointment ID: {apptId}</div>}
    </div>
  );
};

export default BookAppointment;

