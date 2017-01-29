import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { attachListeners } from '../../../config.js';
import { 
  toggleEditFileModal, 
  toggleDeleteFileModal, 
  getUserFiles 
} from '../actions';
import FilesListItem from './FilesListItem';

class FilesList extends Component {
  componentDidMount() {
    // Prevents unnecesary requests if users files already in store
    if (!this.props.files.length || this.props.files[0].ownerId !== this.props.userId) {
      this.props.getUserFiles(this.props.userId, attachListeners);
    }
    else {
      attachListeners();
    }
  }
  componentDidUpdate() {
    // add listeners to newly created user DOM element
    attachListeners();
  }
  renderList() {
    const { files } = this.props;
    if (!files.length) {
      return <p className='pull-left' style={{marginTop: '2em'}}>No files uploaded.</p>;
    }
    return this.props.files.map(file => (
      <FilesListItem 
        key={file._id}
        file={file}
        onEditFileModalClick={ () => this.props.onEditFileModalClick(file) }
        onDeleteFileModalClick={ () => this.props.onDeleteFileModalClick(file) }
      />
    ))
  }
  render() {
    return(
      <Grid className='text-center'>
        { this.renderList() }
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    files: state.files.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditFileModalClick: file => dispatch(toggleEditFileModal(file)),
    onDeleteFileModalClick: file => dispatch(toggleDeleteFileModal(file)),
    getUserFiles: userId => dispatch(getUserFiles(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);