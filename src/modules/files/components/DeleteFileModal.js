import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleRequestError } from '../../common/actions';
import { toggleDeleteFileModal, deleteFileSubmit } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';
import { parseFilename } from '../../../config';

class DeleteFileModal extends Component {
  handleSubmit(e) {  
    e.preventDefault();
    const confirm = document.querySelector('input[name=filename]').value;
    if (confirm !== this.props.files.deleteFilename) {
      this.props.submitError({
        data: {
          success: false,
          message: 'Filenames don\'t match'
        },
      })
    }
    // need to connect user id
    this.props.submitDelete(userId, this.props.files.deleteFileId);
  }
  render() {
    return (
      <Modal 
        show={this.props.files.deleteFileModalOpen } 
        onHide={ ()=>this.props.onModalClick() }
      >
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <Modal.Header closeButton>
            <Modal.Title>{`Delete file "${this.props.files.deleteFilename}"`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              To confirm, type in the filename of the file to be delete
              then submit.
            </p>
            <input type='text' name='filename' className='form-control'/>
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
              onClick={ () => this.props.onModalClick() }
            >
              Cancel
            </div>
          </Modal.Footer>
        </form>
      </Modal>
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
    onModalClick: () => {
      dispatch(toggleDeleteFileModal());
    },
    submitDelete: (fileId) => {
      dispatch(deleteFileSubmit(fileId));
    },
    submitError: error => dispatch(handleRequestError(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFileModal);