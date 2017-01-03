import React from 'react';
import UserBar from '../components/UserBar';
import UserList from '../components/UserList';
import EditUserModal from '../components/EditUserModal';
import DeleteUserModal from '../components/DeleteUserModal';

const UsersDashboard = () => {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <UserBar />
      <UserList />
      <EditUserModal />
      <DeleteUserModal />
    </div>
  )
}

export default UsersDashboard;