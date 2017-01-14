import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

const CreateUserFormInputs = ({renderErrors}) => {
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
        <label className='pull-left'>Profile Photo</label>
        <input type='file' className='form-control'/>
      </Col>
      <Col xs={6}>
        <Row className="show-grid">
          <Col>
            <label>Username</label>
            <Control.text 
              model="createUser.username" 
              className='form-control'
              required
            />
          </Col>
          <Col>
            <label>Email</label>
            <Control.text 
              model="createUser.email" 
              className='form-control'
              required
            />
          </Col>
          <Col>
            <label>First name</label>
            <Control.text 
              model="createUser.firstName" 
              className='form-control'
              required
            />
          </Col>
          <Col>
            <label>Last name</label>
            <Control.text 
              model="createUser.lastName" 
              className='form-control'
              required
            />
          </Col>
          <Col>
            <label>Company</label>
            <Control.text 
              model="createUser.company" 
              className='form-control'
            />
          </Col>
          <Col>
            <label>Password</label>
            <Control 
              model="createUser.password" 
              className='form-control'
              type='password'
            />
          </Col>
          <Col>
            <label>Confirm Password</label>
            <Control 
              model="createUser.confirmPassword" 
              className='form-control'
              type="password"
            />
            <FlashMessage />
          </Col>
        </Row>
      </Col>
    </Row>
    </Grid>
  )
}

export default CreateUserFormInputs;