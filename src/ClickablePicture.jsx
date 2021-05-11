import React from 'react';
import './ClickablePicture.css';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [photo, setPhoto] = React.useState(img);

  function clickPicture() {
    setPhoto(imgClicked);
  }
  return (
    <div class="ClickablePicture">
      <img src={photo} alt="Image not found" onClick={clickPicture}></img>
    </div>
  );
}

export default ClickablePicture;
