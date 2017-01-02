import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleEditUserModal } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

class EditUserModal extends Component {
  constructor() {
    super();
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
      <div>
        <Modal 
          show={this.props.users.editUserModalOpen} 
          onHide={ () => this.props.onModalClick(user) }
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Edit user</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <EditUserForm 
              users={users}
              submitEdit={this.props.submitEdit}
            />
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.props.onModalClick(user) }>Close</Button>
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
    onModalClick: (user) => {
      dispatch(toggleEditUserModal(user));
    },
    submitEdit: updatedUser => {
      dispatch(editUserSubmit(updatedUser));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);