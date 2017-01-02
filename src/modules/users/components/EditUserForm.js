import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
import { Field, Control, Form, actions } from 'react-redux-form';
import { editUserSubmit } from '../actions';

class EditUserForm extends Component {
  constructor(props) {
    super();
  }
  handleSubmit(vals) {
    const updatedUser = {
      ...vals,
      _id: this.props.users.editUserId,
    }
    this.props.submitEdit(updatedUser)
  }
  render() {
    const { users } = this.props;
    return (
      <Form model="form.editUser" 
        onSubmit={ this.handleSubmit.bind(this) }>
        <label>Username</label>
        <Control.text 
          model="editUser.username" 
          defaultValue={users.editUsername || ''}
        />
        <label>Email</label>
        <Control.text 
          model="editUser.email" 
          defaultValue={users.editUserEmail || ''}
        />
        <label>Company</label>
        <Control.text 
          model="editUser.company" 
          defaultValue={users.editUserCompany || ''}
        />
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}

export default EditUserForm;