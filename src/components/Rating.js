import React from 'react';

export default function Rating(props) {
  console.log(props);
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}
