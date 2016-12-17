import React from 'react';
import SearchBar from './SearchBar';
import NewUser from './NewUser';
import { Grid, Row, Col } from 'react-bootstrap';

const UserBar = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} sm={8}>
          <SearchBar />
        </Col>
        <Col xs={12} sm={4}>
          <NewUser />
        </Col>
      </Row>
    </Grid>
  )
}

export default UserBar;