import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Signin from '../../auth/components/Signin';

class App extends Component {
  renderBody() {
    if (this.props.auth.authenticated) {
      return this.props.children;
    }
    return <Signin />
  }
  render() {
    return (
      <div>
        <Navigation authenticated={this.props.auth.authenticated} />
        <div className='container'>
          { this.renderBody() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(App);