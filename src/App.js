import React from 'react';
import Login from './components/Login';

const App = () => {
  const headerStyle = {
    color: 'white', // Set text color to white
    fontsize: 20
  };
  return (
    <div>
      <h1 style={headerStyle}> VACCINE MANAGEMENT SYSTEM</h1>
      <Login />
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';

// const App = () => {
//   const headerStyle = {
//     color: 'white',
//     fontSize: 20,
//   };

//   return (
//     <Router>
//       <div>
//         <h1 style={headerStyle}> VACCINE MANAGEMENT SYSTEM</h1>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

