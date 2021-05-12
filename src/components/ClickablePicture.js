import React from 'react';
import '../App.css';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [image, setImage] = React.useState(img);

  function changeTheImage() {
    let currentImage;
    image === img ? (currentImage = imgClicked) : (currentImage = img);
    setImage(currentImage);
    console.log(currentImage);
  }

  return (
    <div>
      <img src={image} alt="Some guy" onClick={changeTheImage}></img>
    </div>
  );
}

export default ClickablePicture;
