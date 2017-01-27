import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = ({isAdmin, authenticated, signOutRequest, editProfileHandler}) => {
  const renderAdmin = () => {
    if (isAdmin) {
      return (
        <LinkContainer to='/dashboard/users'>
          <NavItem>Users</NavItem>
        </LinkContainer>
      )
    }
    return;    
  }
  const renderAuth = () => {
    if (authenticated) {
      return (
        <Navbar.Collapse>
          <Nav pullRight>
            { renderAdmin() }
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
              <MenuItem onClick={ editProfileHandler }>Edit Profile</MenuItem>
              <MenuItem divider />
              <LinkContainer 
                to='/dashboard/signin'
                onClick={ () => signOutRequest() } 
              >
                <MenuItem eventKey={3.2}>Signout</MenuItem>
              </LinkContainer>
            </NavDropdown>          
          </Nav>
        </Navbar.Collapse>
      )
    }
    return;
  }
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      { renderAuth() }
    </Navbar>
  )
}

export default Navigation;