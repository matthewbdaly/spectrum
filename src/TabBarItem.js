import React, { Component } from 'react';
import './TabBarItem.scss';

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
