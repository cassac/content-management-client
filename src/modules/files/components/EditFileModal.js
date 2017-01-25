import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon, Modal, ControlLabel, FormControl } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';
import { toggleEditFileModal, editFileSubmit, editFileOnChangeHandler } from '../actions';

class EditFileModal extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEdit(
      this.props.edit.editFileOwnerId,
      {
        _id: this.props.edit.editFileId,
        comment: this.props.edit.editFileComment,
      }
    );
  }
  render() {
    return (
      <Modal 
        show={this.props.edit.editFileModalOpen} 
        onHide={ this.props.onModalClick }
      >
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <Modal.Header closeButton>
            <Modal.Title>{`Edit file ${this.props.edit.editFilename}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <ControlLabel>Comment:</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              defaultValue={this.props.edit.editFileComment} 
              onChange={ ({target}) => this.props.onChangeHandler('editFileComment', target.value)}
            />
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
    )
  }
}

const mapStateToProps = state => {
  return {
    edit: state.files,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalClick: file => {
      dispatch(toggleEditFileModal(file));
    },
    submitEdit: (userId, file) => {
      dispatch(editFileSubmit(userId, file));
    },
    onChangeHandler: (field, value) => {
      dispatch(editFileOnChangeHandler(field, value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFileModal);