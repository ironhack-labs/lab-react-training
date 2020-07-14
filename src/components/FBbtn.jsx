import React from 'react';

export default function FBbtn(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.selectCountry(props.country);
        }}
        style={{ background: props.bgColor }}
      >
        {props.country}
      </button>
    </div>
  );
}
