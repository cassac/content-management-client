import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleDeleteUserModal, deleteUserSubmit } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

class DeleteUserModal extends Component {
  handleSubmit(vals) {
    this.props.submitDelete(vals);
  }
  render() {
    const { users } = this.props;
    const user = {
      _id: users.deleteUserId,
      username: users.deleteUsername,
      email: users.deleteUserEmail,
      company: users.deleteUserCompany
    }
    return (
      <div>
        <Modal 
          show={this.props.users.deleteUserModalOpen} 
          onHide={ ()=>this.props.onModalClick(user) }
        >
          <Modal.Header closeButton>
            <Modal.Title>{`Delete ${user.username}'s account`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Confirm account deletion</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ ()=>this.props.onModalClick(user) }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalClick: user => {
      dispatch(toggleDeleteUserModal(user));
    },
    submitDelete: user => {
      dispatch(deleteUserSubmit(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserModal);