import React, { useState } from 'react';

export const Carousel = (props) => {
  const [numero, setnumero] = useState(0);

  const siguiente = () => {
    if (numero >= 3) {
      return;
    }
    setnumero(numero + 1);
  };

  const anterior = () => {
    if (numero <= 0) {
      return;
    }
    setnumero(numero - 1);
  };

  return (
    <div className="mt-5">
      <div>
        <img src={props.imgs[numero]} alt="" className="randomImagen" />

        <div className=" row mt-5 col-md-3">
          <div className="col-md-6 App">
            <button onClick={anterior}>anterior</button>
          </div>

          <div className="col-md-6 App">
            <button onClick={siguiente}>siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
};