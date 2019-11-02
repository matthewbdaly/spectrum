// @flow
import React from 'react';
import type { Node } from 'react';
import './TabBar.scss';

type Props = {
  children?: Node
};

const TabBar = (props: Props) => {
  return (
    <nav className="tab-bar">
      {props.children}
    </nav>
  );
}

export default TabBar;
