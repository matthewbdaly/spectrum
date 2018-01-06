// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Sidebar.scss';

type Props = {
  children?: Node,
  active: boolean
};

type State = {
  active: boolean
};

class Sidebar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: this.props.active ? true : false
    };
  }
  render() {
    return (
      <div className={ 'sidebar' + (this.state.active ? ' active' : '') }>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
