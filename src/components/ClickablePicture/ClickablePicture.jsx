import './ClickablePicture.css';
import { useState } from "react";

function ClickablePicture({ picture, imgClicked }) {
  const [image, setImage] = useState(false);

  const handleToggle = () => {
    setImage(!image);
  }

  return (
    <div className="d-flex justify-content-center images-glasses">
      <img className="image-no-glasses" src={picture} onClick={handleToggle}/>
      <img className="image-glasses" src={image ? imgClicked : ''} onClick={handleToggle} />
    </div>
  )
}

ClickablePicture.defaultProps = {
  picture: ''
};

export default ClickablePicture;