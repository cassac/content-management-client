import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Signin from '../../auth/components/Signin';
import { signInRequest, signOutRequest } from '../../auth/actions';
import { toggleEditUserModal } from '../../users/actions'; 
import EditUserModal from '../../users/components/EditUserModal';

class App extends Component {
  editProfileHandler() {
    this.props.onEditUserModalClick(this.props.auth);
  }
  submitHandler(e) {
    e.preventDefault();
    const creds = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.props.signInRequest(creds);
  }
  renderBody() {
    if (this.props.auth.authenticated) {
      return this.props.children;
    }
    return <Signin submitHandler={ this.submitHandler.bind(this) } />
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Navigation 
          isAdmin={ auth.isAdmin }
          authenticated={ auth.authenticated }
          signOutRequest={ this.props.signOutRequest }
          editProfileHandler={ this.editProfileHandler.bind(this) }
         />
        <EditUserModal />
        <div className='container'>
          { this.renderBody() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInRequest: creds => {
      dispatch(signInRequest(creds));
    },
    signOutRequest: () => {
      dispatch(signOutRequest());
    },
    onEditUserModalClick: user => {
      dispatch(toggleEditUserModal(user));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);