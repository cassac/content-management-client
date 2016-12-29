import React from 'react';
import UserBar from '../components/UserBar';
import UserList from '../components/UserList';

const UsersDashboard = () => {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <UserBar />
      <UserList />
    </div>
  )
}

export default UsersDashboard;