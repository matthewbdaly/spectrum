import React, { Component } from 'react';
import './TextInput.scss';

class TextInput extends Component {
  render() {
    return (
      <label>{this.props.children}
        <input type="text"/>
      </label>
    );
  }
}

export default TextInput;
