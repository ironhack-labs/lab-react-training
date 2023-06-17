import React from 'react';

function ClickablePicture(props) {
  const imgUrl = [props.img, props.imgClicked];
  const [index, setIndex] = React.useState(0);

  return (
    <img
      className="clickableImage"
      src={imgUrl[index % 2]}
      alt=""
      onClick={() => {
        setIndex(index + 1);
      }}
    ></img>
  );
}

export default ClickablePicture;
