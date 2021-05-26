import React from 'react';

export default function CreditCard(props) {
  let imagen;
  if (props.type === 'Visa') {
    imagen = 'img/visa.png';
  } else {
    imagen = 'img/master-card.svg';
  }
  let cuerpo = `**** **** **** ${props.number.slice(-4)}`;

  return (
    <>
      <div
        className="container alinearCuadro"
        style={{ background: `${props.bgColor}` }}
      >
        <div>
          <img src={imagen} alt="" />
        </div>

        <div className="cuerpo">{cuerpo}</div>

        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-md-5 letraFecha">
            Expires {props.expirationMonth}/{props.expirationYear}
          </div>
          <div className="col-md-7 letraFecha">{props.bank}</div>
          <div className="col-md-12 letraFecha">{props.owner}</div>
        </div>
      </div>
      <br />
    </>
  );
}