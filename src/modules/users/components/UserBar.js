import React from 'react';
import SearchBar from './SearchBar';
import NewUser from './NewUser';
import SortBar from './SortBar';
import { Grid, Row, Col } from 'react-bootstrap';

const UserBar = () => {
  return (
    <Grid>
      
      <Row className="show-grid">
        <Col xs={8} sm={8}>
          <SearchBar />
        </Col>
        <Col xs={4} sm={4}>
          <NewUser />
        </Col>
      </Row>

      <SortBar />

    </Grid>
  )
}

export default UserBar;