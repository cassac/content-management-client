import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

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
      // style={verticalAlign}
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
        <p>{file.comment}</p>
      </Col>
      <Col xs={4} className='showOnHover'>
        <Row className="show-grid">
          <Col xs={4}>
            <Link to={`/dashboard/${file.username}/files`} >
              <Glyphicon 
                glyph="list-alt" 
                title={`View ${file.username}'s files`}
                onClick={ () => console.log(`View ${file.username}'s files`) }
              />
            </Link>
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="pencil" 
              title={`Edit ${file.username}'s account`}
              onClick={ () => onEditFileModalClick(file) }
            />
          </Col>
          <Col xs={4}>
            <Glyphicon 
              glyph="trash" 
              title={`Delete ${file.username}'s account`}
              onClick={ () => onDeleteFileModalClick(file) }
            />
          </Col>
        </Row>
      </Col>      
    </Row>
  )
}

export default FileItem;