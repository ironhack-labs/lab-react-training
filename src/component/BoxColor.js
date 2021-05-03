import React from 'react';

const App = (props) => {
  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')',
    color: 'white',
  };
  const colorHash = '';
  return (
    <div className="BoxColor box" style={divStyle}>
      rgb({props.r},{props.g},{props.b})
      <br />
      {colorHash}
    </div>
  );
};

export default App;
