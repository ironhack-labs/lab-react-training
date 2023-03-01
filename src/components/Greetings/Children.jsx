import React from 'react';

function Children({ text, children }) {
  return <p>{`${children} ${text}`}</p>;
}

export default Children;
