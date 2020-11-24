import React from 'react';

const BoxColor = (props) => {
  let backgroundColor =
    'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')';
  let style = {
    backgroundColor: backgroundColor,
    border: '1px solid black',
    width: '700px',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px',
    paddingLeft: '5px',
  };
  return (
    <div className="BoxColor" style={style}>
      <p>{backgroundColor}</p>
    </div>
  );
};

export default BoxColor;
