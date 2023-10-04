/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%', // Ajusta la posición vertical a la mitad del contenedor
    left: '50%', // Ajusta la posición horizontal a la mitad del contenedor
    transform: 'translate(-50%, -50%)', // Centra la imagen
    zIndex: 1, // Asegura que la imagen superpuesta esté por encima de la original
    display: clicked ? 'block' : 'none',
  };

  return (
    <div style={containerStyle}>
      <img
        src={img}
        alt="Imagen"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={imgClicked}
        alt="Imagen Superpuesta"
        style={{ ...overlayStyle, cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
