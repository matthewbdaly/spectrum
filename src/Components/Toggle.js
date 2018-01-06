// @flow
import React, { Component } from 'react';
import './Toggle.scss';

type Props = {
  checked: boolean
};

class Toggle extends Component<Props> {
  render() {
    return (
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider" checked={this.props.checked}></span>
      </label>
    );
  }
}

export default Toggle;
