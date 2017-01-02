import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
import { Field, Control, Form, actions } from 'react-redux-form';
import { Grid, Row, Col } from 'react-bootstrap';
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
      <Grid>
        <Form model="form.editUser"
          onSubmit={ this.handleSubmit.bind(this) }>
          <Row className="show-grid">
            <Col xs={3}>
              <label>Username</label>

            </Col>
            <Col xs={9}>
              <Control.text 
                className=''
                model="editUser.username" 
                defaultValue={users.editUsername || ''}
              />
            </Col>
            <Col xs={3}>
              <label>Email</label>
            </Col>
            <Col xs={9}>
              <Control.text 
                model="editUser.email" 
                defaultValue={users.editUserEmail || ''}
              />
            </Col>
            <Col xs={3}>
              <label>Company</label>
            </Col>
            <Col xs={9}>
              <Control.text 
                model="editUser.company" 
                defaultValue={users.editUserCompany || ''}
              />
            </Col>
            <Col xs={12}>
              <button className="btn btn-default">Submit</button>
            </Col>
          </Row>
        </Form>
      </Grid>
    )
  }
}

export default EditUserForm;