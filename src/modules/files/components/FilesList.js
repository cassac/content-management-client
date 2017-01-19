import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import FilesListItem from './FilesListItem';
import { toggleEditFileModal, toggleDeleteFileModal, getUserFiles } from '../actions';

class FilesList extends Component {
  addListeners() {
    // Attach event listeners to list item elements
    const listItems = document.querySelectorAll('.userListItem');
    listItems.forEach(item => {
      item.addEventListener('mouseenter', ({target}) => {
        target.classList.add('hoverItem');
        target.lastChild.classList.remove('showOnHover');
      });
      item.addEventListener('mouseleave', ({target}) => {
        target.classList.remove('hoverItem');
        target.lastChild.classList.add('showOnHover');
      });
    });
  }
  componentDidMount() {
    this.props.getUserFiles(this.props.userId);
    const that = this;
    setTimeout(function() {
      that.addListeners();
    }, 1000)
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
    getUserFiles: userId => dispatch(getUserFiles(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);