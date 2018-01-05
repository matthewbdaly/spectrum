// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './ListView.scss';

type Props = {
  children?: Node
}

class ListView extends Component<Props> {
  render() {
    return (
      <ul className="listview">
        {this.props.children}
      </ul>
    );
  }
}

export default ListView;
