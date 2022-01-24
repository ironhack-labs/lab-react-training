import { useState } from "react";
import './ClickablePicture.css';



const ClickablePicture = ({img, imgClicked}) =>{

  const [ imgT, setImgT ] = useState(true);
  const handleClick = () => {
    setImgT(!imgT);
    console.log(imgT);
  }

  return (
    <div className="pics">
    
        {imgT ? <img className= "pic" src={img} alt="" onClick={handleClick}/>
        : <img className= "pic" src={imgClicked} onClick={handleClick}alt=""/>

        } 
    </div>
  )
}
export default ClickablePicture;