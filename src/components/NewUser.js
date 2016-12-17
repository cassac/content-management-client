import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const NewUser = () => {
  return (
    <Button 
      bsStyle="primary"
    >
      <Glyphicon glyph="plus" />
       Create new user
    </Button>
  )
}

export default NewUser;