import SingleColorPicker from './SingleColorPicker';
import { useState } from 'react';
const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div style={{marginLeft: 30}}>
      <div>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={(e) => {
            setRValue(e.target.value);
          }}
        />

        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={(e) => {
            setGValue(e.target.value);
          }}
        />

        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={(e) => {
            setBValue(e.target.value);
          }}
        />
        <div className='d-flex flex-row mx-2 align-items-center' >
          <div
            style={{
              background: `rgb(${rValue},${gValue},${bValue})`,
              width: 40,
              height: 40,
              border: '2px solid black',
            }}
          ></div>
          <div className='mx-2' >
            rgb({rValue},{gValue},{bValue})
          </div>
        </div>
      </div>
    </div>
  );
};
export default RGBColorPicker;