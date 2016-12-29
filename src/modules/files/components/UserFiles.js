import React, { Component } from 'react';

export default class UserFiles extends Component {
  render() {
    const { userId } = this.props.params;
    return (
      <div>
        {`User ${userId}'s Files`}
      </div>
    )
  }
}