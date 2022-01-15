import React from "react";
import './ClickablePicture.css';

const ClickablePicture = (props) => {
  const {img, imgClicked} = props;

  const [ imgToggle, setImgToggle ] = React.useState(true);
 console.log(imgToggle)
  const handleClick = () => {
    console.log('hello')
    console.log(imgToggle)

    setImgToggle(!imgToggle);
  }

  return (
    <>
      
        {imgToggle ? <img className= "profilePic" src={img} alt="profile" onClick={handleClick}/>
        : <img className= "profilePic" src={imgClicked} onClick={handleClick}alt="glasses"/>

        } 
    </>
  )
}

export default ClickablePicture;