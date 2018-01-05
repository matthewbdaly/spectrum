import React, { Component } from 'react';

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
