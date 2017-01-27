import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserBar from '../components/UserBar';
import UserList from '../components/UserList';
import DeleteUserModal from '../components/DeleteUserModal';
import FlashMessage from '../../common/components/FlashMessage';

const UsersDashboard = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={4}>
            <h4>Users Dashboard</h4>
          </Col>
          <Col xs={4}>
            <FlashMessage />
          </Col>
        </Row>
      </Grid>
      <UserBar />
      <UserList />
      <DeleteUserModal />
    </div>
  )
}

export default UsersDashboard;