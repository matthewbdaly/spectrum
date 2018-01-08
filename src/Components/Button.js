// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Button.scss';

type Props = {
  theme: string,
  inverse: boolean,
  block: boolean,
  rounded: boolean,
  children?: Node,
  clickHandler?: () => void
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
    if (this.props.rounded) {
      theme += " rounded";
    }
    this.state = {
      theme: theme
    };
  }
  render() {
    return (
      <button className={this.state.theme} onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

export default Button;
