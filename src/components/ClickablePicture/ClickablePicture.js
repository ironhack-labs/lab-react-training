import { useState } from 'react';
import './ClickablePicture.css';

function ClickablePicture({ img, imgClicked }) {
    
  let [defaultImage, setDefaultImage] = useState(img);

  const toggleImg = () => {
    if (defaultImage === img) {
      setDefaultImage(imgClicked);
    } else if (defaultImage === imgClicked) {
      setDefaultImage(img);
    }
  };

  return (
    <article>
      <img src={defaultImage} onClick={toggleImg} />
    </article>
  );
}

export default ClickablePicture;
