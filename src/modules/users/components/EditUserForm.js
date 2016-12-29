import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

class EditUserForm extends Component {
  handleSubmit(val) {
    console.log('submitted:', val)
  }
  render() {
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Submit!</button>
      </Form>
    )
  }
}

export default EditUserForm;