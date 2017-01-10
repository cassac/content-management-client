import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

const EditUserFormInputs = ({users, renderErrors}) => {
  return (
     <Grid style={{width: 'inherit'}}>
      <Row>
        <Col xs={6} className='text-center'>
          <img 
            src="https://placehold.it/100x100" 
            className='img-responsive img-rounded'
            style={{
              margin: '0 auto',
              'marginBottom': '38px'
            }}
          />
          <br/>
          <label className='pull-left'>Update Photo</label>
          <input type='file' className='form-control'/>
        </Col>
        <Col xs={6}>
          <Row className="show-grid">
            <Col>
              <label>Username</label>
              <Control.text 
                model="editUser.username" 
                defaultValue={users.editUsername || ''}
                className='form-control'
              />
            <br/>
            </Col>
            <Col>
              <label>Email</label>
              <Control.text 
                model="editUser.email" 
                defaultValue={users.editUserEmail || ''}
                className='form-control'
              />
            <br/>
            </Col>
            <Col>
              <label>Company</label>
              <Control.text 
                model="editUser.company" 
                defaultValue={users.editUserCompany || ''}
                className='form-control'
              />
            { renderErrors() }
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

export default EditUserFormInputs;