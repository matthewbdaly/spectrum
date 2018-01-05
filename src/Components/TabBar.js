// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './TabBar.scss';

type Props = {
  children?: Node
};

class TabBar extends Component<Props> {
  render() {
    return (
      <nav className="tab-bar">
        {this.props.children}
      </nav>
    );
  }
}

export default TabBar;
