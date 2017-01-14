import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, 
  Button, Grid, Row, Col } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

const Signin = ({submitHandler}) => {
  return(
    <Grid>
      <Row className='show-grid'>
        <Col xsOffset={3} xs={6}>
          <h1>User Sign In</h1>
          <Form onSubmit={ submitHandler } >
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type='text' 
                name='username' />
              <ControlLabel>Password</ControlLabel>
              <FormControl 
                type='password' 
                name='password'  />
              <br />
              <FlashMessage />
              <br />
              <Button 
                type='submit' 
                bsStyle="default">
                Sign In
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Grid>
  )
}

export default Signin;