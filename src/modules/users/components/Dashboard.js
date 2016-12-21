import React, { Component } from 'react';
import UserBar from '../components/UserBar';

export default class UsersDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Users Dashboard</h1>
        <UserBar />
      </div>
    )
  }
}