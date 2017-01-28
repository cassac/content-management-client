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
    const { props } = this;
    props.submitDelete(props.auth._id, props.files.deleteFileId);
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
          <Modal.Footer>
            <FlashMessage />
            <input 
              type='submit' 
              value='Confirm Delete' 
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
    auth: state.auth,
    files: state.files,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalClick: () => {
      dispatch(toggleDeleteFileModal());
    },
    submitDelete: (userId, fileId) => {
      dispatch(deleteFileSubmit(userId, fileId));
    },
    submitError: error => dispatch(handleRequestError(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFileModal);