import './index.css';
import { useState } from 'react';
import maxence from '../../assets/images/maxence.png';
import maxenceWithGlasses from '../../assets/images/maxence-glasses.png';


export const ClickablePicture = () => {
  const [image, setImg] = useState(maxence);

  const handleChangeImgClick = () => {
    if( image === maxence){

      setImg(maxenceWithGlasses);
    } else{
      setImg(maxence);
    }
    
  };

  return (
    <div className="ClickablePicture">
      <img src={image} onClick={() => handleChangeImgClick()} alt="img" />
    </div>
  );
};
