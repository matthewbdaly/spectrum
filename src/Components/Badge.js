// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Badge.scss';

type Props = {
  theme: string,
  children?: Node,
  inverse: boolean
};

type State = {
  theme: string
};

class Badge extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let theme = this.props.theme;
    if (this.props.inverse) {
      theme += " inverse";
    }
    this.state = {
      theme: theme
    };
  }
  render() {
    return (
      <span className={ 'badge' + (this.state.theme ? (' ' + this.state.theme) : '') }>
        {this.props.children}
      </span>
    );
  }
}

export default Badge;
