// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Sidebar.scss';

type Props = {
  children?: Node
};

class Sidebar extends Component<Props> {
  render() {
    return (
      <div className="sidebar">
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
