// // src/components/Login.js
// import React, { useState } from 'react';
// import './Login.css'; // Import the CSS file for styling
// //import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   // const handleLogin = () => {
//   //   // Handle login logic here based on username, password, and userType
//   //   console.log(`Logging in as ${userType} with username: ${username} and password: ${password}`);
//   // };

//   const handleLogin = async () => {
//     console.log(username, password, userType);
//     const formData = new FormData();
//     formData.append('username', username);
//     formData.append('password', password);
//     formData.append('userType', userType);
    


//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/login/', {
//         method: 'POST',
//         body: formData,

//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         //const data = await response.json();
        
//         // Check user type and redirect accordingly
//         switch (data.user_type) {
//           case 'admin':
//             navigate('/admin');
//             break;
//           case 'nurse':
//             navigate('/nurse');
//             break;
//           case 'patient':
//             navigate('/patient');
//             break;
//           default:
//             // Handle other user types or show an error message
//             break;
//         }
//       } else {
//         // Handle login error
//         setError('Username or password is incorrect');
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form>
//           <label>
//             Username:
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             User Type:
//             <select value={userType} onChange={(e) => setUserType(e.target.value)}>
//               <option value="">Select User Type</option>
//               <option value="admin">Admin</option>
//               <option value="nurse">Nurse</option>
//               <option value="patient">Patient</option>
//             </select>
//           </label>
//           <br />
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </form>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;
// //no


import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('userType', userType);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login, redirect to admin page or handle accordingly
        console.log('Login successful:', data.user_type);
      } else {
        // Incorrect password or user does not exist, show a message
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

//   const handleLogin = () => {
//     // Handle login logic here based on username, password, and userType
//     const handleLogin = async () => {
//         const formData = new FormData();
//         formData.append('username', username);
//         formData.append('password', password);
//         formData.append('userType', userType);
      
//         try {
//           const response = await fetch('http://127.0.0.1:8000/api/login/', {
//             method: 'POST',
//             body: formData,
//           });
      
//           const data = await response.json();
      
//           if (response.ok) {
//             // Successful login, redirect to admin page or handle accordingly
//             console.log('Login successful:', data.user_type);
//           } else {
//             // Incorrect password or user does not exist, show a message
//             console.error('Login failed:', data.message);
//           }
//         } catch (error) {
//           console.error('Error during login:', error);
//         }
//       };
      


//   };




  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label>
            User Type:
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="nurse">Nurse</option>
              <option value="patient">Patient</option>
            </select>
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
