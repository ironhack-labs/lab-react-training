import React from 'react';

function getBackground(color, value) {
  if (color === 'R') {
    return `rgb(${value}, 0, 0)`;
  } else if (color === 'G') {
    return `rgb(0, ${value}, 0)`;
  } else if (color === 'B') {
    return `rgb(0, 0, ${value})`;
  }
}

const SingleColorPicker = (props) => {
  const { color, value, onChange } = props;

  const divStyle = {
    backgroundColor: getBackground(color, value)
  }

  return (
    <div className='color-single'>
      <div style={divStyle} className='color-sample'></div>
      <div className='color-text'>
        {color}: <input 
          className='color-input'
          value={value} 
          type='number' 
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default SingleColorPicker;
