import React from 'react';

function Random(props) {
  const random = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} {'=>'} {random}
      </p>
    </div>
  );
}
export default Random;

// Function with props direct into de parameter 👇🏼
//  function Random({min, max}) {
//   const random = Math.round(
//     Math.random() * (max - min) + min
//   );

//   return (
//     <div>
//       <p>
//         Random value between {min} and {max} {'=>'} {random}
//       </p>
//     </div>
//   );
// }
