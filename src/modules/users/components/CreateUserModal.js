import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleCreateUserModal } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

class CreateUserModal extends Component {
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
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Create a new user</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.props.onModalClick }>Close</Button>
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
    onModalClick: () => {
      dispatch(toggleCreateUserModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModal);