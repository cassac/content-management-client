import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDeleteFileModal, deleteFileSubmit } from '../actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

class DeleteFileModal extends Component {
  handleSubmit(e) {  
    e.preventDefault();
    console.log('submitted:', e)
  }
  render() {
    return (
      <Modal 
        show={this.props.files.deleteFileModalOpen} 
        onHide={ ()=>this.props.onModalClick(file) }
      >
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <Modal.Header closeButton>
            <Modal.Title>{`Delete 's account`}</Modal.Title>
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
              onClick={ () => this.props.onModalClick(file) }
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
    files: state.files.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalClick: file => {
      dispatch(toggleDeleteFileModal(file));
    },
    submitDelete: file => {
      dispatch(deleteFileSubmit(file));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFileModal);