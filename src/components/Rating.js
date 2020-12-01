import React from 'react';

export default function Rating(props) {
//   console.log(props);
  let rounded = Math.round(props.children);
  return (
    <div>
      {rounded === 0 && <div> &#9734; &#9734; &#9734; &#9734; &#9734;</div>}
      {rounded === 1 && <div> &#9733; &#9734; &#9734; &#9734; &#9734;</div>}
      {rounded === 2 && <div> &#9733; &#9733; &#9734; &#9734; &#9734;</div>}
      {rounded === 3 && <div> &#9733; &#9733; &#9733; &#9734; &#9734;</div>}
      {rounded === 4 && <div> &#9733; &#9733; &#9733; &#9733; &#9734;</div>}
      {rounded === 5 && <div> &#9733; &#9733; &#9733; &#9733; &#9733;</div>}
    </div>
  );
}
