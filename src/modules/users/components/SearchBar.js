import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { filterUsers } from '../actions';

class SearchBar extends Component {
  onChangeHandler({target}) {
    this.props.filterUsers(target.value);
  }
  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl 
              placeholder='Search for users by name, username or company'
              type="text" 
              onChange={ this.onChangeHandler.bind(this) }
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

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterUsers: filterTerm => {
      dispatch(filterUsers(filterTerm));
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);