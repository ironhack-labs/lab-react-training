import React from 'react';

function SingleColorPicker({color, onChange}){
const [colorRGB, setColor] = React.useState(0);

const handleChange = (e) => {
let {value} = e.target;
setColor(value)
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
      onChange={handleChange}
    />

    </>
  )
}

export default SingleColorPicker