import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const authRedirect = (ComposedComponent) => {
  class Redirect extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      const { auth } = this.props;
      if (auth.authenticated) {
        if (auth.isAdmin) {
          browserHistory.push(`/dashboard/users`);
          this.context.router.push(`/dashboard/users`);
        }
        else if (auth._id && !auth.isAdmin) {
          browserHistory.push(`/dashboard/${auth._id}/files`);
          this.context.router.push(`/dashboard/${auth._id}/files`);
        }
      }
    }

    componentWillUpdate(nextProps) {
      const { auth } = nextProps;
      if (auth.authenticated) {
        if (auth.isAdmin) {
          browserHistory.push(`/dashboard/users`);
          this.context.router.push(`/dashboard/users`);
        }
        else {
          browserHistory.push(`/dashboard/${auth._id}/files`);
          this.context.router.push(`/dashboard/${auth._id}/files`);
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(Redirect);

}

module.exports = {
  authRedirect
}