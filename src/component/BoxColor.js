import React from 'react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

const App = (props) => {
  const { r, b, g } = props;
  const blackOrwhite =
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';
  const divStyle = {
    backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')',
    color: blackOrwhite,
  };
  const colorHash =
    '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return (
    <div className="BoxColor box" style={divStyle}>
      rgb({r},{g},{b})
      <br />
      {colorHash}
    </div>
  );
};

export default App;
