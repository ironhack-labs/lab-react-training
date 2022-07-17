import React from 'react';
//import ProtpTypes from 'prop-types';

export default function Random({ min, max }) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      <div className="border mw-50 m-5">
        <p className="">
          Random value between {min} and {max} ={'>'} {random}
        </p>
      </div>
    </>
  );
}

// Random.protpTypes = {
//   min: ProtpTypes.number,
//   max: ProtpTypes.number,
// };
