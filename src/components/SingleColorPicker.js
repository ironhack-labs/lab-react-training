import React, { useEffect, useState } from 'react';

const SingleColorPicker = (props) => {
  const [background, setBackground] = useState('black');

  const changeBackground = () => {
    switch (props.color) {
      case 'r':
        setBackground(`rgb(${props.value},0,0)`);
        break;
      case 'g':
        setBackground(`rgb(0,${props.value},0)`);
        break;
      case 'b':
        setBackground(`rgb(0,0,${props.value})`);
        break;
      default:
        setBackground('white');
        alert('please, insert a number');
    }
  };
  useEffect(() => {
    changeBackground();
  }, [props.value]);
  return (
    <div className='d-flex flex-row m-2 align-items-center' >
      <div
        style={{
          background: background,
          width: 40,
          height: 40,
          border: '2px solid black',
        }}
      ></div>
      <div>
        <div className='mx-1' >
        <label>{props.color.toUpperCase()}:</label>
          <input style={{width: 80}} onChange={props.onChange} value={props.value} type="number" />
        </div>
      </div>
    </div>
  );
};
export default SingleColorPicker;