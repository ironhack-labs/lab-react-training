import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  //const layout = { layout: `rgb(${r}, ${g}, ${b})` };
  console.log(props);
  //console.log('layout:', layout);
  return (
    <div
      style={{
        margin: '15px',
        border: 'solid',
        height: '10vh',
        width: '20vh',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      }}
    >
      <p>
        <b>
          rgb({r}, {g}, {b})
        </b>
      </p>
    </div>
  );
}

export default BoxColor;
