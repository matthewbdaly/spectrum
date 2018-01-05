// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './ListViewItem.scss';

type Props = {
  children?: Node
}

class ListViewItem extends Component<Props> {
  render() {
    return (
      <li className="listview-item">
        {this.props.children}
      </li>
    );
  }
}

export default ListViewItem;
