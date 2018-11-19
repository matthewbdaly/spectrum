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
  onClickOutside: () => void
};

class Sidebar extends Component<Props> {
  wrapperRef: ?HTMLUListElement;
  setWrapperRef: Function;
  handleClickOutside: Function;
  constructor(props: Props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node: HTMLUListElement) {
    this.wrapperRef = node;
  }
  handleClickOutside(event: Event) {
    if (this.wrapperRef && event.target instanceof Node && !this.wrapperRef.contains(event.target)) {
      if (this.props.active === true) {
        this.props.onClickOutside();
      }
    }
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
      <ul ref={this.setWrapperRef} className={ 'sidebar' + (this.props.active ? ' active' : '') }>
        {linkNodes}
      </ul>
    );
  }
}

export default Sidebar;
