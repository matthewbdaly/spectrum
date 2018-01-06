// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Bar.scss';

type Props = {
  theme: string,
  children?: Node
};

type State = {
  theme: string
}

class Bar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let theme = "bar";
    if (this.props.theme) {
      theme += " " + this.props.theme;
    }
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
      <div className={this.state.theme}>
        {this.props.children}
      </div>
    );
  }
}

export default Bar;
