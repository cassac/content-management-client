import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { verticalAlign } from '../../../style';
import { parseFilename, parseFileSize, parseContentType } from '../../../config';

const FileItem = ({file, onEditFileModalClick, onDeleteFileModalClick}) => {
  return(
    <Row 
      className="show-grid userListItem" 
      style={verticalAlign}
    >
      <Col xs={2}>
        <p>
          <a href={`/api/users/${ file.ownerId }/files/${file._id }?token=${localStorage.token}`} >
            {parseFilename(file.filePath)}
          </a>
        </p>
      </Col>
      <Col xs={2}>
        <p>{parseContentType(file.contentType)}</p>
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
            <a href={`/api/users/${ file.ownerId }/files/${file._id }?token=${localStorage.token}`} >
              <Glyphicon 
                glyph="download-alt" 
                title={`Download file ${parseFilename(file.filePath)}`}
              />
            </a>
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