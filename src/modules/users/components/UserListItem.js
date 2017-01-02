import React from 'react';
import { Link } from 'react-router';
import { Glyphicon, Button, Row, Col } from 'react-bootstrap';
import { verticalAlign } from '../../../style.js';
import DeleteUserModal from './DeleteUserModal';

const UserListItem = ({user, onModalClick}) => {
  return (
    <Row 
      className="show-grid userListItem" 
      style={verticalAlign}
    >
      <Col xs={2}>
        <p>{user.username}</p>
      </Col>
      <Col xs={2}>
        <p>{user.username}</p>
      </Col>
      <Col xs={2}>
        <p>{user.username}</p>
      </Col>
      <Col xs={2}>
        <p>{user.username}</p>
      </Col>
      <Col xs={4} className='showOnHover'>
        <Row className="show-grid">
          <Col xs={4}>
            <Link to={`/dashboard/user/${user._id}/files`} >
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
              title={`Edit ${user.username}'s profile`}
              onClick={ () => onModalClick(user) }
            />
          </Col>
          <Col xs={4}>
            <DeleteUserModal user={user} />
          </Col>
        </Row>
      </Col>      
    </Row>
  )
}

export default UserListItem;