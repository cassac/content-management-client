import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';
import { toggleUploadFileModal, uploadFileSubmit } from '../actions';
import UploadFileFormInputs from './UploadFileFormInputs';

class UploadFileModal extends Component {
  handleSubmit(e) {  
    e.preventDefault();
    console.log('submitted:', e)
  }
  render() {
    return (
      <div>
        <Button 
          bsStyle="primary"
          onClick={ this.props.onModalClick }
        >
          <Glyphicon glyph="plus" />
          Upload File
        </Button>
        <Modal 
          show={this.props.files.uploadFileModalOpen} 
          onHide={ this.props.onModalClick }
        >
          <form onSubmit={ this.handleSubmit.bind(this) } >
            <Modal.Header closeButton>
              <Modal.Title>{`Upload file to  's account`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UploadFileFormInputs />
              <FlashMessage />
            </Modal.Body>
            <Modal.Footer>
              <input 
                type='submit' 
                value='Submit' 
                className='btn btn-success'
                style={{'marginRight': '45px'}}
              /> 
              <div
                className="btn btn-danger"
                onClick={ this.props.onModalClick }
              >
                Cancel
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.files,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalClick: file => dispatch(toggleUploadFileModal()),
    submitUpload: file => dispatch(uploadFileSubmit(file)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFileModal);