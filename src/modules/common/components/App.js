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
    if (this.props.authenticated) {
      return this.props.children;
    }
    return <Signin submitHandler={ this.submitHandler.bind(this) } />
  }
  render() {
    return (
      <div>
        <Navigation 
          authenticated={this.props.authenticated}
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
    authenticated: state.auth.authenticated
  }
}



export default connect(mapStateToProps, actions)(App);