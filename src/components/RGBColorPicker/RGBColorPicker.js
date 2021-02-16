import React from 'react';
import SingleColorPicker from './SingleColorPicker';
 
const initialColor = {
  r: 0,
  g: 0,
  b: 0
}
function RGBColorPicker(){
  const [rgb, setColor] = React.useState(initialColor);
  const handleChangeColor = (color,value) => {
    setColor({
      ...rgb,
      [color]:value
    })
  }
console.log(rgb)

  return(
    <>
    <div style={{display: 'flex', margin: '15px'}}>
      <div style={{width:'25px', height:'25px', backgroundColor: `rgb(${rgb.r}, 0, 0)`}}></div>
      <SingleColorPicker color='r' onChange={handleChangeColor}/>
    </div>
    <div style={{display: 'flex', margin: '15px'}}>
      <div style={{width:'25px', height:'25px', backgroundColor: `rgb(0, ${rgb.g}, 0)`}}></div>
      <SingleColorPicker color='g' onChange={handleChangeColor}/>
    </div>
    <div style={{display: 'flex', margin: '15px'}}>
      <div style={{width:'25px', height:'25px', backgroundColor: `rgb(0, 0, ${rgb.b})`}}></div>
      <SingleColorPicker color='b' onChange={handleChangeColor}/>
    </div>
    <div style={{display: 'flex', margin: '15px'}}>
      <div style={{width:'25px', height:'25px', backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}}></div>
      <p style={{margin:'0 15px'}}>rgb({rgb.r}, {rgb.g}, {rgb.b})</p>
    </div>
    </>
  )
}

export default RGBColorPicker