// @flow
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import type Node from 'react';

type Props = {
  active: boolean,
  onClickOutside: () => void
};

export default function clicksOutside(WrappedComponent) {
  class clicksOutside extends Component<Props> {
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
      const {target} = event;
      if (this.wrapperRef && target instanceof Node) {
        const ref = findDOMNode(this.wrapperRef);
        if (ref && !ref.contains(target) && this.props.active === true) {
          this.props.onClickOutside();
        }
      }
    }
    render() {
      return (
        <WrappedComponent {...this.props} ref={this.setWrapperRef} />
      );
    }
  };
  return clicksOutside;
}
