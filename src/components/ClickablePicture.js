import { useState } from 'react';
// import classes from './ClickablePicture.module.css';

const ClickablePicture = (props) => {
  const [clicked, setClicked] = useState(false);
  const onClickHandler = () => setClicked((clicked) => !clicked);

  return (
    <div>
      <img
        src={clicked ? props.imgClicked : props.img}
        alt="clickablePic"
        onClick={onClickHandler}
      />
      ;
    </div>
  );
};

export default ClickablePicture;
