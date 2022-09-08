import { useEffect, useState } from 'react';
import './ClickablePicture.css';
const ClickablePicture = (props) => {
  const [image, setImage] = useState(props.img);
  const [word, setWord] = useState(true);

  const changeImage = () => {
    return word ? setImage(props.img) : setImage(props.imgClicked);
  };
  useEffect(() => {
    changeImage();
  }, [word]);
  return (
    <div id="picture">
      <img onClick={() => setWord(!word)} src={image} alt={image} />
    </div>
  );
};
export default ClickablePicture;
