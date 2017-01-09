import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import UserListItem from './UserListItem';
import { toggleEditUserModal, toggleDeleteUserModal, getUsers } from '../actions';

class UserList extends Component {
  componentDidMount() {
    // Initial user request
    if (!this.props.users.length) this.props.getUsers();
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
  renderUsers() {
    return this.props.users.map(user => (
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

const mapStateToProps = (state) => {
  return {
    users: state.users.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditUserModalClick: (user) => {
      dispatch(toggleEditUserModal(user));
    },
    onDeleteUserModalClick: (user) => {
      dispatch(toggleDeleteUserModal(user));
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);