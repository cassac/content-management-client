import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const requireAuth = (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/dashboard/signin');
        this.context.router.push('/dashboard/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/dashboard/signin');
        this.context.router.push('/dashboard/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated
    }
  }

  return connect(mapStateToProps)(Auth);

}

module.exports = {
  requireAuth
}