import { useState } from 'react';

const ClickablePicture = (props) => {
  const [show, setShow] = useState(true);

  const setClick = () => {
    setShow(!show);
  };
  return (
    <div onClick={setClick}>
      {show ? <img src={props.img} alt="" /> : <img src={props.img2} alt="" />}
    </div>
  );
};

export default ClickablePicture;
