// @flow
import React, { Component } from 'react';
import './Toggle.scss';

type Props = {
  theme: string,
  checked: boolean
};

type State = {
  checked: boolean,
  theme: string
};

class Toggle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      theme: this.props.theme ? 'toggle ' + this.props.theme : 'toggle'
    };
  }
  update = () => {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <label className={this.state.theme} onChange={this.update}>
        <input type="checkbox" checked={this.state.checked} />
        <span className="slider"></span>
      </label>
    );
  }
}

export default Toggle;
