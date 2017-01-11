import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label } from 'react-bootstrap';
import { hideFlashMessage } from '../actions';

class Message extends Component {
  handleHideMessage() {
    setTimeout(function() {
      this.props.hideMessage();
    }.bind(this), 3000)
  }
  renderMessage() {
    if (this.props.requests.message) {
      { this.handleHideMessage() }
      const type = this.props.requests.success ? 'success' : 'danger';
      return(
        <h4>
          <Label name='flashMessage' bsStyle={type}>
            { this.props.requests.message }
          </Label>
        </h4>
      )
    }
    else {
      return;
    }
  }
  render() {
    return (
      <span>
        { this.renderMessage() }
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {
    requests: state.requests,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideMessage: () => {
      dispatch(hideFlashMessage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);