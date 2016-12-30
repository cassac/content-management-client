import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

class EditUserForm extends Component {
  handleSubmit(val) {
    console.log('submitted:', val)
  }
  render() {
    return (
      <Form model="editUser" onSubmit={(editUser)=> {this.handleSubmit(editUser); console.log(editUser)}}>
        <label>Username</label>
        <Control.text model=".username" />
        <label>Email</label>
        <Control.text model=".email" />
        <label>Company</label>
        <Control.text model=".company" />
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}

export default EditUserForm;