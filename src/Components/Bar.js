// @flow
import React from 'react';
import type { Node } from 'react';
import './Bar.scss';

type Props = {
  theme: string,
  children?: Node,
  location: string,
  inverse: boolean,
  block: boolean
};

const Bar = (props: Props) => {
  let theme = "bar";
  if (props.theme) {
    theme += " " + props.theme;
  }
  if (props.inverse) {
    theme += " inverse";
  }
  if (props.block) {
    theme += " block";
  }
  if (props.location) {
    theme += " " + props.location;
  }
  return (
    <div className={theme}>
      {props.children}
    </div>
  );
}

export default Bar;
