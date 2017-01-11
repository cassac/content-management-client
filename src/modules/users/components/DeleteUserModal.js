import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDeleteUserModal, deleteUserSubmit } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

class DeleteUserModal extends Component {
  handleSubmit(e) {  
    e.preventDefault();
    const { deleteUsername, deleteUserId } = this.props.users;
    if (e.target.username.value !== deleteUsername) {
      this.setState({errors: 'Usernames don\'t match'})
      return;
    }
    this.props.submitDelete(deleteUserId);
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
      <Modal 
        show={this.props.users.deleteUserModalOpen} 
        onHide={ ()=>this.props.onModalClick(user) }
      >
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <Modal.Header closeButton>
            <Modal.Title>{`Delete ${user.username}'s account`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              To confirm, type in the username of the account to be delete
              then submit.
            </p>
            <input type='text' name='username' className='form-control'/>
            <FlashMessage />
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
        </form>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    requests: state.requests
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