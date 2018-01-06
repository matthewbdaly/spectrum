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
  update = () => {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <label className="toggle" onChange={this.update}>
        <input type="checkbox" checked={this.state.checked} />
        <span className="slider"></span>
      </label>
    );
  }
}

export default Toggle;
