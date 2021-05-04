import React from 'react';

export default function Greetings(props) {
  return <div className="Greetings">HERE IS YOUR RATING: {stars(props.children)}</div>;
}

function stars(amount) {
  var fullSt = String.fromCharCode(9733);
  var emptySt = String.fromCharCode(9734);
  var empty = 5 - Math.round(amount);
  return fullSt.repeat(Math.round(amount))+emptySt.repeat(empty);
}
