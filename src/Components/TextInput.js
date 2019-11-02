// @flow
import React from 'react';
import type { Node } from 'react';
import './TextInput.scss';

type Props = {
  children?: Node
};

const TextInput = (props: Props) => {
  return (
    <label className="textinput">{props.children}
    <input type="text"/>
  </label>
  );
}

export default TextInput;
