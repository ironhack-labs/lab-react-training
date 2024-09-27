import {useState} from "react";

function ClickablePicture({img, imgClicked}) {
    const [isImageToggled,setIsImageToggled] = useState(false);

    const toggleImg = () => {
        return setIsImageToggled(!isImageToggled);
    }
  return (
    <div>
      <img alt="max" src={isImageToggled ? img : imgClicked} onClick={toggleImg}/>
    </div>
  )
}

export default ClickablePicture
