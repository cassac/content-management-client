import React from 'react';
import { Glyphicon, Button, Row, Col } from 'react-bootstrap';

const UserListItem = ({user}) => {
  return (
    <Row className="show-grid">
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
      <Col xs={4}>
        <Row className="show-grid">
          <Col xs={4}>
            <Button
              title={`View ${user.username}'s files`}
              bsSize="xsmall" 
              onClick={ () => console.log(`View ${user.username}'s files`) }
            >
              <Glyphicon glyph="list-alt" />
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              title={`Edit ${user.username}'s profile`}
              bsSize="xsmall" 
              onClick={ () => console.log(`Edit ${user.username}'s profile`) }
            >
              <Glyphicon glyph="pencil" />
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              title={`Delete ${user.username}'s account`}
              bsSize="xsmall" 
              onClick={ () => console.log(`Delete ${user.username}'s account`) }
            >
              <Glyphicon glyph="trash" />
            </Button>
          </Col>
        </Row>
      </Col>      
    </Row>
  )
}

export default UserListItem;