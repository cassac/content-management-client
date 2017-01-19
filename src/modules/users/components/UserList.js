import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { attachListeners } from '../../../config.js';
import { 
  toggleEditUserModal, 
  toggleDeleteUserModal, 
  getUsers
} from '../actions';
import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount() {
    // Initial component mount
    if (!this.props.users.length) {
      this.props.getUsers(attachListeners);
    }
    else {
    // Subsequent mounts
      attachListeners();
    }
  }
  componentDidUpdate() {
    // add listeners to newly created user DOM element
    attachListeners();
  }
  renderUsers() {
    const { users, filteredUsers, filterTerm } = this.props;
    const results = filterTerm ? filteredUsers : users;
    return results.map(user => (
        <UserListItem 
          key={user._id}
          user={user}
          onEditUserModalClick={ () => this.props.onEditUserModalClick(user) }
          onDeleteUserModalClick={ () => this.props.onDeleteUserModalClick(user) }
        />
    ));
  }
  render() {
    return (
      <Grid className='text-center'>
        { this.renderUsers() }
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.results,
    filteredUsers: state.users.filteredResults,
    filterTerm: state.users.filterTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditUserModalClick: user => {
      dispatch(toggleEditUserModal(user));
    },
    onDeleteUserModalClick: user => {
      dispatch(toggleDeleteUserModal(user));
    },
    getUsers: cb => {
      dispatch(getUsers(cb));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);