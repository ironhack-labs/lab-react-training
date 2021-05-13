import React from 'react';
import '../App.css';

function ClickablePicture(props) {
  const [imageToggle, setImageToggle] = React.useState(false);
  const imageClicked = () => {
    setImageToggle(!imageToggle);
  };
  return (
    <div>
      <img
        src={imageToggle ? `${props.imgClicked}` : `${props.img}`}
        onClick={imageClicked}
      ></img>
    </div>
  );
}

export default ClickablePicture;
