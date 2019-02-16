// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

type LinkItem = {
  route: string,
  text: string
};

type Props = {
  links: Array<LinkItem>,
  active: boolean,
};

class Sidebar extends Component<Props> {
  render() {
    let linkNodes = this.props.links.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.route}>{item.text}</Link>
        </li>
      );
    });
    return (
      <ul className={ 'sidebar' + (this.props.active ? ' active' : '') }>
        {linkNodes}
      </ul>
    );
  }
}

export default Sidebar;
