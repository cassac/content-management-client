import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortUsersBy } from '../actions';
import { Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

class SortBar extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={2} > Username
        </Col>
        <Col xs={2} > Company
        </Col>
        <Col xs={2} > Created
        </Col>
        <Col xs={2} > Edited
        </Col>
      </Row>
    )
  }
}

export default SortBar;