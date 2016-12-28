import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount() {
    const listItems = document.querySelectorAll('.userListItem');
    listItems.forEach(item => {
      item.addEventListener('mouseenter', e => {
        e.target.classList.add('hoverItem');
        e.target.lastChild.classList.remove('showOnHover');
      });
      item.addEventListener('mouseleave', e => {
        e.target.classList.remove('hoverItem');
        e.target.lastChild.classList.add('showOnHover');
      });
    });
  }
  renderUsers() {
    return this.props.users.map(user => (
        <UserListItem 
          key={user._id}
          user={user}
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

export default connect(mapStateToProps, null)(UserList);