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
      <label className="textinput">{this.props.children}
        <input type="text"/>
      </label>
    );
  }
}

export default TextInput;
