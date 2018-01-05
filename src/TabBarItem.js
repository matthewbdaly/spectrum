import React, { Component } from 'react';

class TabBarItem extends Component {
  render() {
    return (
      <a className="tab-bar-item">
        {this.props.children}
      </a>
    );
  }
}

export default TabBarItem;
