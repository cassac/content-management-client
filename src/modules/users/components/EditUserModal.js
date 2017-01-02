import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, Control, Form, actions } from 'react-redux-form';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { toggleEditUserModal, editUserSubmit } from '../actions';
import EditUserFormInputs from './EditUserFormInputs';

class EditUserModal extends Component {
  handleSubmit(vals) {
    const updatedUser = {
      ...vals,
      _id: this.props.users.editUserId,
    }
    this.props.submitEdit(updatedUser)
  }
  render() {
    const { users } = this.props;
    const user = {
      _id: users.editUserId,
      username: users.editUsername,
      email: users.editUserEmail,
      company: users.editUserCompany
    }
    return (
      <Modal 
        show={this.props.users.editUserModalOpen} 
        onHide={ () => this.props.onModalClick(user) }
      >
        <Form model="form.editUser"
          className='horizontal-form'
          onSubmit={ this.handleSubmit.bind(this) }>
          <Modal.Header closeButton>
            <Modal.Title>
              {`Edit ${user.username}'s profile`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserFormInputs users={users} />
          </Modal.Body>
          <Modal.Footer>
            <input 
              type='submit' 
              value='Submit' 
              className='btn btn-success'
              style={{'marginRight': '45px'}}
            /> 
            <div
              className="btn btn-danger"
              onClick={ () => this.props.onModalClick(user) }
            >
              Cancel
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalClick: user => {
      dispatch(toggleEditUserModal(user));
    },
    submitEdit: updatedUser => {
      dispatch(editUserSubmit(updatedUser));
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);