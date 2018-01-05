import React, { Component } from 'react';
import './TabBar.scss';

class TabBar extends Component {
  render() {
    return (
      <nav className="tab-bar">
        {this.props.children}
      </nav>
    );
  }
}

export default TabBar;
