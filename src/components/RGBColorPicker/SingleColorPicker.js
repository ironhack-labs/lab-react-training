import React from 'react';

function SingleColorPicker({color, onChange}){
const [colorRGB, setColor] = React.useState(0);

const handleChange = (e) => {
let {value} = e.target;
if(value >=255){
  value = 255;
} else if ( value <=0){
  value = 0
}
setColor(value)
console.log("colorRGB",colorRGB)
onChange(color, value)
}

  return(
    <>
    <label style={{margin:'0px 15px 0 15px'}}>{color}: </label>
    <input
      name='color'
      type='number'
      max='255'
      min='0'
      value={colorRGB}
      onChange={handleChange}
    />

    </>
  )
}

export default SingleColorPicker