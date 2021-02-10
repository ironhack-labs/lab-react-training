import React from 'react';

export default function Rating(props) {

  let rate = parseFloat(props.children);

  if (rate < 0.5) return <div>☆☆☆☆☆</div>;
  else if (rate >= 0.5 && rate < 1.5) return <div>★☆☆☆☆</div>;
  else if (rate >= 1.5 && rate < 2.5) return <div>★★☆☆☆</div>;
  else if (rate >= 2.5 && rate < 3.5) return <div>★★★☆☆</div>;
  else if (rate >= 3.5 && rate < 4.5) return <div>★★★★☆</div>;
  else return <div>★★★★★</div>;

};