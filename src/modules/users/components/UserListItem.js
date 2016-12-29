import React from 'react';
import { Link } from 'react-router';
import { Glyphicon, Button, Row, Col } from 'react-bootstrap';
import { verticalAlign } from '../../../style.js';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';

const UserListItem = ({user}) => {
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
            <EditUserModal user={user} />
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