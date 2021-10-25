import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  //const layout = { layout: `rgb(${r}, ${g}, ${b})` };
  console.log(props);
  //console.log('layout:', layout);
  return (
    <div
      style={{
        margin: '20px',
        border: '2px solid black',
        width: '30vh',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        // color: 'white',
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
