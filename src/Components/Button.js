// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Button.scss';

type Props = {
  theme: string,
  inverse: boolean,
  block: boolean,
  children?: Node
};

type State = {
  theme: string
}

class Button extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let theme = this.props.theme;
    if (this.props.inverse) {
      theme += " inverse";
    }
    if (this.props.block) {
      theme += " block";
    }
    this.state = {
      theme: theme
    };
  }
  render() {
    return (
      <button className={this.state.theme}>{this.props.children}</button>
    );
  }
}

export default Button;
