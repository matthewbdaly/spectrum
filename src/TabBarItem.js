import React, { Component } from 'react';
import './TabBarItem.scss';

class TabBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  render() {
    return (
      <a className={ 'tab-bar-item' + (this.state.active ? ' active' : '') }>
        {this.props.children}
      </a>
    );
  }
}

export default TabBarItem;
