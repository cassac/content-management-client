import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

const UploadFileFormInputs = ({onChangeHandler}) => {
  return (
    <div>
      <Grid style={{width: 'inherit'}}>
        <Row>
          <Col xs={12} className='text-center'>
            <label className='pull-left'>Upload File</label>
            <input 
              name='file'
              type='file' 
              className='form-control' 
              onChange={ ({target}) => onChangeHandler(target.name, target.files[0]) }
            />
          </Col>
          <Col xs={12}>
            <br />
            <label>Comment</label>
            <textarea
              name='comment'
              type='text' 
              className='form-control'
              required
              onChange={ ({target}) => onChangeHandler(target.name, target.value)  }
            >
            </textarea>
            <FlashMessage />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default UploadFileFormInputs;