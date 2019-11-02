// @flow
import React from 'react';
import type { Node } from 'react';
import './ListView.scss';

type Props = {
  children?: Node
}

const ListView = (props: Props) => {
  return (
    <ul className="listview">
      {props.children}
    </ul>
  );
}

export default ListView;
