// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './TabBarItem.scss';

type Props = {
  active: mixed,
  children?: Node
};

type State = {
  active: mixed,
};

class TabBarItem extends Component<Props, State> {
  constructor(props: Props) {
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
