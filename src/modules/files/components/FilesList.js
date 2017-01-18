import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import FilesListItem from './FilesListItem';
import { toggleEditFileModal, toggleDeleteFileModal, getUserFiles } from '../actions';

class FilesList extends Component {
  componentDidMount() {
    this.props.getUserFiles();
  }
  render() {
    return(
      <Grid className='text-center'>
        { this.props.files.map(file => (
          <FilesListItem 
            key={file._id}
            file={file}
            onEditFileModalClick={ () => this.props.onEditFileModalClick(file) }
            onDeleteFileModalClick={ () => this.props.onDeleteFileModalClick(file) }
          />
        ))}
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
    getUserFiles: () => dispatch(getUserFiles()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);