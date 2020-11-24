import React, { useState } from 'react';
import { ImgStyled } from './styles/index';

const ClickablePicture = ({ img, imgClicked }) => {
  const [normal, setNormal] = useState(true);

  return (
    <ImgStyled
      onClick={() => setNormal(!normal)}
      src={normal ? img : imgClicked}
    />
  );
};

export default ClickablePicture;
