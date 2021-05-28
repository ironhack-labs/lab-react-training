import React, { useState } from 'react';

export const RGBColorPicker = () => {
  const [red, setred] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);

  const cambioRed = (event) => {
    setred(event.target.value);
  };

  const cambioGreen = (event) => {
    setgreen(event.target.value);
  };
  const cambioBlue = (event) => {
    setblue(event.target.value);
  };

  return (
    <div className="mt-5">
      <div className="botones2 col-md-6">
        <div className="cajaColor" style={{ backgroundColor: 'red' }}></div>
        <h5 style={{ marginLeft: '20px' }}>R:</h5>
        <input
          type="number"
          max="255"
          min="0"
          style={{ marginLeft: '10px' }}
          value={red}
          onChange={cambioRed}
        />
      </div>
      <div className="botones2 col-md-6 mt-5">
        <div className="cajaColor" style={{ backgroundColor: 'green' }}></div>
        <h5 style={{ marginLeft: '20px' }}>G:</h5>
        <input
          type="number"
          max="255"
          min="0"
          style={{ marginLeft: '10px' }}
          value={green}
          onChange={cambioGreen}
        />
      </div>
      <div className="botones2 col-md-6 mt-5">
        <div className="cajaColor" style={{ backgroundColor: 'blue' }}></div>
        <h5 style={{ marginLeft: '20px' }}>B:</h5>
        <input
          type="number"
          max="255"
          min="0"
          style={{ marginLeft: '10px' }}
          value={blue}
          onChange={cambioBlue}
        />
      </div>
      <div className="botones2 col-md-6 mt-5">
        <div
          className="cajaColor"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        ></div>
        <h5 style={{ marginLeft: '20px' }}>
          rgb ({red},{green},{blue})
        </h5>
      </div>
    </div>
  );
};