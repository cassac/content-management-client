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
    const { user } = this.props;
    return (
      <div>
        <Glyphicon 
          glyph="pencil" 
          title={`Edit ${user.username}'s profile`}
          onClick={ ()=>this.props.onModalClick(user._id) }
        />
        <Modal 
          show={this.props.users.editUserModalOpen} 
          onHide={ ()=>this.props.onModalClick(user._id) }
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Edit user</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <EditUserForm />
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ ()=>this.props.onModalClick(user._id) }>Close</Button>
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
    onModalClick: (userId) => {
      dispatch(toggleEditUserModal(userId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);