import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
import { Field, Control, Form, actions } from 'react-redux-form';
import { editUserSubmit } from '../actions';

class EditUserForm extends Component {
  constructor(props) {
    super();
  }
  handleSubmit(val) {
    console.log(val)
    // this.props.submitEdit(val)
  }
  render() {
    console.log(this)
    const { users } = this.props;
    return (
      <Form model="form.editUser" 
        onSubmit={ this.handleSubmit.bind(this) }>
        <label>Username</label>
        <Control.text 
          model="editUser.username" 
          value={users.editUserId || ''}
        />
        <label>Email</label>
        <Control.text 
          model="editUser.email" 
          value={users.editUserEmail || ''}
        />
        <label>Company</label>
        <Control.text 
          model="editUser.company" 
          value={users.editUserCompany || ''}
        />
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}

export default EditUserForm;