import React from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

const NewUser = () => {
  return (
    <div>
      <Button 
        bsStyle="primary"
        bsSize="large"
        onClick={ () => {console.log('new user')} }
      >
        <Glyphicon glyph="plus" />
        Create new user
      </Button>
      <Modal show={true} onHide={ () => {console.log('hide modal')} }>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Create a new user</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <hr />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => { console.log('hide modal button')} }>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default NewUser;