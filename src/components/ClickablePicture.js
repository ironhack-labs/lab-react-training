import { useState } from 'react';

function ClickablePicture(props) {
  const [image, setImage] = useState(props.img);
  return (
    <div className="bronx">
      <img
        src={image}
        alt="no-glasses"
        onClick={() => {
          if (image === props.img) {
            setImage((prevImage) => props.imgClicked);
          } else {
            setImage((prevImage) => props.img);
          }
        }}
      ></img>
    </div>
  );
}
export default ClickablePicture;
