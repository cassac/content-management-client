import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { verticalAlign } from '../../../style.js';

const FileItem = ({file, onEditFileModalClick, onDeleteFileModalClick}) => {
  const parseFilename = (filePath) => {
    const parts = filePath.split('/');
    return parts[parts.length - 1];
  }
  const parseFileSize = (fileSize) => {
    return parseFloat(fileSize / 1000000).toFixed(3);
  }
  return(
    <Row 
      className="show-grid userListItem" 
      style={verticalAlign}
    >
      <Col xs={2}>
        <p>{parseFilename(file.filePath)}</p>
      </Col>
      <Col xs={2}>
        <p>{file.contentType}</p>
      </Col>
      <Col xs={2}>
        <p>{parseFileSize(file.fileSize)}</p>
      </Col>
      <Col xs={2}>
        <p>{file.comment.substr(0, 50)}</p>
      </Col>
      <Col xs={4} className='showOnHover'>
        <Row className="show-grid">
          <Col xs={4}>
            <Glyphicon 
              glyph="download-alt" 
              title={`Download file ${parseFilename(file.filePath)}`}
              onClick={ () => console.log(`Download file ${parseFilename(file.filePath)}`) }
            />
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="pencil" 
              title={`Edit file ${parseFilename(file.filePath)}`}
              onClick={ () => onEditFileModalClick(file) }
            />
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="trash" 
              title={`Delete file ${parseFilename(file.filePath)}`}
              onClick={ () => onDeleteFileModalClick(file) }
            />
          </Col>
        </Row>
      </Col>      
    </Row>
  )
}

export default FileItem;