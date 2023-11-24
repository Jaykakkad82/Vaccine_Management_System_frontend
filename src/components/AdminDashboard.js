import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/register-nurse">Register Nurse</Link>
      <Link to="/admin/update-nurse">Update Nurse Info</Link>
      <Link to="/admin/delete-nurse">Delete Nurse</Link>
      <Link to="/admin/add-vaccine">Add Vaccine</Link>
      <Link to="/admin/update-vaccine">Update Vaccine</Link>
      <Link to="/admin/view-nurse-info">View Nurse Info</Link>
      <Link to="/admin/view-patient-info">View Patient Info</Link>
    </div>
  );
};

export default AdminDashboard;
