import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { userFilterCriteria } from '../../../config';
import { filterUsers } from '../actions';

class SearchBar extends Component {
  onChangeHandler({target}) {
    this.props.filterUsers(target.value);
  }
  render() {
    return (
      <form>
        <FormGroup>
          <FormControl 
            placeholder={`Filter users by ${ userFilterCriteria.join(', ') }`}
            type="text" 
            onChange={ this.onChangeHandler.bind(this) }
          />
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