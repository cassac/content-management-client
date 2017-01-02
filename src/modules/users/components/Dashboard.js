import React from 'react';
import UserBar from '../components/UserBar';
import UserList from '../components/UserList';
import EditUserModal from '../components/EditUserModal';

const UsersDashboard = () => {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <UserBar />
      <UserList />
      <EditUserModal />
    </div>
  )
}

export default UsersDashboard;