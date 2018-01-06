// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

type Props = {
  links: array,
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
    let linkNodes = this.props.links.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.route}>{item.text}</Link>
        </li>
      );
    });
    return (
      <ul className={ 'sidebar' + (this.state.active ? ' active' : '') }>
        {linkNodes}
      </ul>
    );
  }
}

export default Sidebar;
