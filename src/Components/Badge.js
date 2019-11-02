// @flow
import React from 'react';
import type { Node } from 'react';
import './Badge.scss';

type Props = {
  theme: string,
  children?: Node,
  inverse: boolean
};

const Badge = (props: Props) => {
  let theme = props.theme;
  if (props.inverse) {
    theme += " inverse";
  }
  return (
    <span className={ 'badge' + (theme ? (' ' + theme) : '') }>
      {props.children}
    </span>
  );
}

export default Badge;
