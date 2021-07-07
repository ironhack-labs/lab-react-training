import React from 'react';
function BoxColor({ r, g, b }) {
  //   const convertSingleCode = (colorCode) => {
  //     let hexCode = colorCode.toString(16);

  //     return hexCode.length == 1 ? '0' + hexCode : hexCode;
  //   };

  //   const rgbToHex = (r, g, b) => {
  //     return (
  //       '#' +
  //       this.convertSingleCode(r) +
  //       this.convertSingleCode(g) +
  //       this.convertSingleCode(b)
  //     );
  //   };

  const bgColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="boxColor" style={bgColor}>
      rgb({r}, {g}, ${b})
    </div>
  );
}
export default BoxColor;
