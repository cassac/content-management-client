import React from 'react';
import { Link } from 'react-router';
import { Glyphicon, Button, Row, Col } from 'react-bootstrap';
import { verticalAlign } from '../../../style.js';

const UserListItem = ({user, onEditUserModalClick, onDeleteUserModalClick}) => {
  const renderName = (user) => {
    if (!user.firstName && !user.lastName) return;
    else if (user.firstName && user.lastName) {
      return user.firstName + ' ' + user.lastName;
    }
    else {
      return user.firstName ? user.firstName : user.lastName;
    }
  }
  return (
    <Row 
      className="show-grid userListItem" 
      style={verticalAlign}
    >
      <Col xs={2}>
        <p>{user.username}</p>
      </Col>
      <Col xs={2}>
        <p>{user.company}</p>
      </Col>
      <Col xs={2}>
        <p>{user.email}</p>
      </Col>
      <Col xs={2}>
        <p>{ renderName(user) }</p>
      </Col>
      <Col xs={4} className='showOnHover'>
        <Row className="show-grid">
          <Col xs={4}>
            <Link to={`/dashboard/${user._id}/files`} >
              <Glyphicon 
                glyph="list-alt" 
                title={`View ${user.username}'s files`}
                onClick={ () => console.log(`View ${user.username}'s files`) }
              />
            </Link>
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="pencil" 
              title={`Edit ${user.username}'s account`}
              onClick={ () => onEditUserModalClick(user) }
            />
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="trash" 
              title={`Delete ${user.username}'s account`}
              onClick={ () => onDeleteUserModalClick(user) }
            />
          </Col>
        </Row>
      </Col>      
    </Row>
  )
}

export default UserListItem;