import { useState } from 'react';

function ClickablePicture(props) {
  const [isImage, setIsImage] = useState(true);
  const changeImage = () => {
    setIsImage(!isImage);
  };
  return (
    <div>
      {isImage ? (
        <img
          onClick={changeImage}
          className="profile-picture"
          src={props.img}
          style={{ cursor: 'pointer', width: '300px' }}
          alt={props.img}
        />
      ) : (
        <img
          onClick={changeImage}
          className="profile-picture"
          src={props.imgClicked}
          style={{ cursor: 'pointer', width: '300px' }}
          alt={props.imgClicked}
        />
      )}
    </div>
  );
}

export default ClickablePicture;
