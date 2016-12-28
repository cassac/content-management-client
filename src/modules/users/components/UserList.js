import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  renderUsers() {
    return this.props.users.map(user => {
      return (
        <p key={user._id}>{user.username}</p>
      )
    })
  }
  render() {
    return (
      <div>
        { this.renderUsers() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.results
  }
}

export default connect(mapStateToProps, null)(UserList);