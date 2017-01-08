import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  renderAuth() {
    if (this.props.auth.authenticated) {
      return (
        <Nav pullRight>
          <LinkContainer to='/dashboard/users'>
            <NavItem>Users</NavItem>
          </LinkContainer>
          <LinkContainer to='/dashboard/files'>
            <NavItem>Files</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
            <LinkContainer to='/dashboard/profile'>
              <MenuItem eventKey={3.1}>Profile</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <LinkContainer to='/dashboard/signout'>
              <MenuItem eventKey={3.2}>Signout</MenuItem>
            </LinkContainer>
          </NavDropdown>          
        </Nav>
      )
    }
    else {
      return (
        <Nav pullRight>
          <LinkContainer to='/dashboard/signin'>
            <NavItem>Sign In</NavItem>
          </LinkContainer>          
        </Nav>
      )
    }
  }
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Logo
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { this.renderAuth() }
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navigation);