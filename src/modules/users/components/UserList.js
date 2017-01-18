import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import UserListItem from './UserListItem';
import { toggleEditUserModal, toggleDeleteUserModal, getUsers } from '../actions';

class UserList extends Component {
  addListeners() {
    // Attach event listeners to list item elements
    const listItems = document.querySelectorAll('.userListItem');
    listItems.forEach(item => {
      item.addEventListener('mouseenter', ({target}) => {
        target.classList.add('hoverItem');
        target.lastChild.classList.remove('showOnHover');
      });
      item.addEventListener('mouseleave', ({target}) => {
        target.classList.remove('hoverItem');
        target.lastChild.classList.add('showOnHover');
      });
    });
  }
  componentDidMount() {
    // Initial component mount
    if (!this.props.users.length) {
      this.props.getUsers(this.addListeners);
    }
    else {
    // Subsequent mounts
      this.addListeners();
    }
  }
  componentDidUpdate() {
    // add listeners to newly created user DOM element
    this.addListeners();
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