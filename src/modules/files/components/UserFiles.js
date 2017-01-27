import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';
import UploadFileModal from './UploadFileModal';
import EditFileModal from './EditFileModal';
import DeleteFileModal from './DeleteFileModal';
import FilesList from './FilesList';

const UserFiles = ({params}) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={4}>
            <h4>User Files</h4>
          </Col>
          <Col xs={4}>
            <FlashMessage />
          </Col>
        </Row>
      </Grid>
      <UploadFileModal userId={params.userId} />
      <EditFileModal />
      <DeleteFileModal userId={params.userId} />
      <FilesList userId={params.userId} />
    </div>
  )
}

export default UserFiles;