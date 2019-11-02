// @flow
import React, { useState } from 'react';
import './Toggle.scss';

type Props = {
  theme: string,
  checked: boolean
};

const Toggle = (props: Props) => {
  const theme = props.theme ? 'toggle ' + props.theme : 'toggle';
  const [checked, setChecked] = useState(props.checked);

  const update = () => {
    setChecked(!checked);
  }

  return (
    <label className={theme} onChange={update}>
      <input type="checkbox" defaultChecked={checked} />
      <span className="slider"></span>
    </label>
  );
}

export default Toggle;
