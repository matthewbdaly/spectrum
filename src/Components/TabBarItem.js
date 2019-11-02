// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import './TabBarItem.scss';

type Props = {
  active: mixed,
  children?: Node
};

const TabBarItem = (props: Props) => {
  const [active, setActive] = useState(props.active);
  return (
    <a className={ 'tab-bar-item' + (active ? ' active' : '') }>
      {props.children}
    </a>
  );
}

export default TabBarItem;
