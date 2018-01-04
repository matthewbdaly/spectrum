import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button className={this.props.style}>Button</button>
    );
  }
}

export default Button;
