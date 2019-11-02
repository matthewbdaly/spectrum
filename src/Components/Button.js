// @flow
import React from 'react';
import type { Node } from 'react';
import './Button.scss';

type Props = {
  theme: string,
  inverse: boolean,
  block: boolean,
  rounded: boolean,
  children?: Node,
  clickHandler?: () => void
};

const Button = (props: Props) => {
  let theme = props.theme;
  if (props.inverse) {
    theme += " inverse";
  }
  if (props.block) {
    theme += " block";
  }
  if (props.rounded) {
    theme += " rounded";
  }
  return (
    <button className={theme} onClick={props.clickHandler}>{props.children}</button>
  );
}

export default Button;
