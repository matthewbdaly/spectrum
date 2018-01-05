import React, { Component } from 'react';
import './Alert.scss';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'alert' + (this.props.theme ? (' ' + this.props.theme) : '')
    };
  }
  render() {
    return (
      <div className={this.state.theme}>
        {this.props.children}
      </div>
    );
  }
}

export default Alert;
