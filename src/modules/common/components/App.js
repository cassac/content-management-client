import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Signin from '../../auth/components/Signin';
import * as actions from '../../auth/actions';

class App extends Component {
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
         />
        <div className='container'>
          { this.renderBody() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);