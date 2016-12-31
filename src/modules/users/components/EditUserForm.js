import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Control, Form, actions } from 'react-redux-form';

class EditUserForm extends Component {
  handleSubmit(val) {
    console.log(val)
  }
  render() {
    return (
      <Form model="form.editUser" 
        onSubmit={ this.handleSubmit }>
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