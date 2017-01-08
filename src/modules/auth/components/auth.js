import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/dashboard/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
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