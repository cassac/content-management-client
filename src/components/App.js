import React, { Component } from 'react';
import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}