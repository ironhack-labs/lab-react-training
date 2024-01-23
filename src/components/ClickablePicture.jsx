import { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [imgLink, setImgLink] = useState(img);

  const changeImgLink = () => {
    if (imgLink === img) {
      setImgLink(imgClicked);
    } else {
      setImgLink(img);
    }
  };

  return (
    <div>
      <img
        src={imgLink}
        onClick={changeImgLink}
        style={{ width: '30%', margin: '30px 10px' }}
        alt=""
      />
    </div>
  );
}
export default ClickablePicture;
