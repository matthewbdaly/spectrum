import React, { Component } from 'react';
import './ListViewItem.scss';

class ListViewItem extends Component {
  render() {
    return (
      <li className="listview-item">
        {this.props.children}
      </li>
    );
  }
}

export default ListViewItem;
