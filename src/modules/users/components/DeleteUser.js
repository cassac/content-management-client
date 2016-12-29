import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleDeleteUserModal } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

class DeleteUser extends Component {
  constructor() {
    super();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Glyphicon 
          glyph="trash" 
          title={`Delete ${user.username}'s account`}
          onClick={ ()=>this.props.onModalClick(user._id) }
        />
        <Modal 
          show={this.props.users.deleteUserModalOpen} 
          onHide={ ()=>this.props.onModalClick(user._id) }
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Delete user</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
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
      dispatch(toggleDeleteUserModal(userId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);