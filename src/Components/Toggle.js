// @flow
import React, { Component } from 'react';
import './Toggle.scss';

type Props = {
  checked: boolean
};

type State = {
  checked: boolean
};

class Toggle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }
  render() {
    return (
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider" checked={this.state.checked}></span>
      </label>
    );
  }
}

export default Toggle;
