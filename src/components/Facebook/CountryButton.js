// components/Facebook/CountryButton.js

import React from 'react';

const CountryButton = (props) => {
  const { handleClick, style, children } = props;
  const onClick = () => { handleClick(children) }
  return (
    <button onClick={onClick} style={style}>{children}</button>
  )
}

export default CountryButton;
