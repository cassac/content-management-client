import React, { Component } from 'react';
import UserBar from '../components/UserBar';
import UserList from '../components/UserList';

export default class UsersDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Users Dashboard</h1>
        <UserBar />
        <UserList />
      </div>
    )
  }
}