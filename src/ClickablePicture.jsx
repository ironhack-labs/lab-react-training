import React from 'react';
import './ClickablePicture.css';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [photo, setPhoto] = React.useState(img);

  const clickPicture = () =>
    photo === img ? setPhoto(imgClicked) : setPhoto(img);

  return (
    <div class="ClickablePicture">
      <img src={photo} alt="Not found" onClick={clickPicture}></img>
    </div>
  );
}

export default ClickablePicture;
