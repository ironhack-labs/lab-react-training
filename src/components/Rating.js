import React from 'react';

export default function Rating({ children }) {
  const darkStarCount = Math.round(children);
  return (
    <div>{`${'★'.repeat(darkStarCount)}${'☆'.repeat(5 - darkStarCount)}`}</div>
  );
}
