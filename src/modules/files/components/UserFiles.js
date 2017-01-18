import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';
import CreateFileModal from './CreateFileModal';
import FilesList from './FilesList';

const UserFiles = ({params}) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={4}>
            <h4>{`User ${params.username}'s Files`}</h4>
          </Col>
          <Col xs={4}>
            <FlashMessage />
          </Col>
        </Row>
      </Grid>
      <CreateFileModal />
      <FilesList />
    </div>
  )
}

export default UserFiles;