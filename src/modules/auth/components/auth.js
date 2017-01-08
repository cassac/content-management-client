import React, { Component } from 'react';
import { connect } from 'react-redux';

const wrapComponent = (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/dashboard');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/signin');
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

export default wrapComponent;