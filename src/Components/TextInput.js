// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './TextInput.scss';

type Props = {
  children?: Node
};

class TextInput extends Component<Props> {
  render() {
    return (
      <label>{this.props.children}
        <input type="text"/>
      </label>
    );
  }
}

export default TextInput;
