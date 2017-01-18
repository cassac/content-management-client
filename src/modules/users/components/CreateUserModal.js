import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';
import { handleRequestError } from '../../common/actions';
import { toggleCreateUserModal, createUserSubmit} from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import CreateUserFormInputs from './CreateUserFormInputs';

class CreateUserModal extends Component {
  handleSubmit(vals) {
    if (vals.password !== vals.confirmPassword) {
      this.props.submitError({
        data: {
          success: false,
          message: 'Passwords don\'t match'
        },
      })
      return;
    }
    this.props.submitCreate(vals);
  }
  render() {
    return (
      <div>
        <Button 
          bsStyle="primary"
          onClick={ this.props.onModalClick }
        >
          <Glyphicon glyph="plus" />
          Create user
        </Button>
        <Modal 
          show={this.props.users.createUserModalOpen} 
          onHide={ this.props.onModalClick }
        >
          <Form model="form.createUser"
            onSubmit={ this.handleSubmit.bind(this) }>
            <Modal.Header closeButton>
              <Modal.Title>Create a new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateUserFormInputs />
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
                onClick={ () => this.props.onModalClick() }
              >
                Cancel
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
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
    onModalClick: () => dispatch(toggleCreateUserModal()),
    submitCreate: newUser => dispatch(createUserSubmit(newUser)),
    submitError: error => dispatch(handleRequestError(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModal);