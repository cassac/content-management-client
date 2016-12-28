import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortUsersBy } from '../actions';
import { userSearchCriteria } from '../../../config.js';
import { Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

class SortBar extends Component {
  render() {
    const createSortToggles = () => {
      return userSearchCriteria.map(item => {
        return (
          <Col xs={2} > {item}
          </Col>
        )
      });
    }
    return (
      <Row className="show-grid">
        { createSortToggles() }
      </Row>
    )
  }
}

export default SortBar;