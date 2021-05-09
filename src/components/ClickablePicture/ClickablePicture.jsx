import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = (props) => {
  let [pictureClicked, setPictureClicked] = useState(false);

  const changePicture = () => {
    !pictureClicked ? setPictureClicked(true) : setPictureClicked(false);
  };

  return (
    <div className="imagesundiv">
      {!pictureClicked ? (
        <img
          onClick={() => changePicture()}
          className="imagesun"
          src={props.img}
          alt=""
        />
      ) : (
        <img
          onClick={() => changePicture()}
          className="imagesun"
          src={props.imgClicked}
          alt=""
        />
      )}
    </div>
  );
};

export default ClickablePicture;
