import React from 'react';

const BoxColor = (props) => {
let {r,g,b} = props;
let texto1= `rgb(${r},${g},${b})`

function rgb2hex(rgb) {
    if (  rgb.search("rgb") === -1 ) {
         return rgb;
    }
    else if ( rgb === 'rgba(0, 0, 0, 0)' ) {
        return 'transparent';
    }
    else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
};

let texto2 = rgb2hex(`rgb(${r},${g},${b})`)

return(
<div className = 'BoxColor' style={{backgroundColor: texto2}}>
<p>{texto1}</p>
<p>{texto2}</p>
</div>
)

};

export default BoxColor;