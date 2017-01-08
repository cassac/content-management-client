import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = ({authenticated}) => {
  const renderAuth = () => {
    if (authenticated) {
      return (
        <Navbar.Collapse>
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