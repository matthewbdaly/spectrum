// @flow
import React from 'react';
import type { Node } from 'react';
import './ListViewItem.scss';

type Props = {
  children?: Node
}

const ListViewItem = (props: Props) => {
  return (
    <li className="listview-item">
      {props.children}
    </li>
  );
}

export default ListViewItem;
