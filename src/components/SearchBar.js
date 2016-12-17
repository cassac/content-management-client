import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl 
              placeholder='Search for users by name, username or company'
              type="text" 
            />
            <InputGroup.Button>
              <Button bsStyle="primary">Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}

export default SearchBar;