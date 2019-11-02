// @flow
import React from 'react';
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

const Sidebar = (props: Props) => {
  let linkNodes = props.links.map((item, index) => {
    return (
      <li key={index}>
        <Link to={item.route}>{item.text}</Link>
      </li>
    );
  });
  return (
    <ul className={ 'sidebar' + (props.active ? ' active' : '') }>
      {linkNodes}
    </ul>
  );
}

export default Sidebar;
