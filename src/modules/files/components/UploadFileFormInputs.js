import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

const UploadFileFormInputs = () => {
  return (
    <div>
    <Grid style={{width: 'inherit'}}>
      <Row>
        <Col xs={6} className='text-center'>
          <label className='pull-left'>Upload File</label>
          <input type='file' className='form-control'/>
        </Col>
        <Col xs={6}>
          <Row className="show-grid">
            <Col>
              <label>Comment</label>
              <Control.text 
                model="createUser.username" 
                className='form-control'
                required
              />
              <FlashMessage />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </div>
  )
}

export default UploadFileFormInputs;