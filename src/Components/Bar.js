// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Bar.scss';

type Props = {
  theme: string,
  children?: Node,
  location: string,
  inverse: boolean,
  block: boolean
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
    if (this.props.location) {
      theme += " " + this.props.location;
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
