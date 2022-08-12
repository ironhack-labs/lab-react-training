
import {useState} from 'react';
import NormalPic from '../assets/images/maxence.png';
import ClickedPic from '../assets/images/maxence-glasses.png'



const ClickablePicture = (props) => {
  const [pic, setPic] = useState(props.img)
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    setCount((prevState)=>prevState +1)
    count % 2 === 0 ? setPic(()=>ClickedPic) :
    setPic(()=>NormalPic) 
    }
  console.log(count)

  return (
    <img src={pic} onClick={(e)=> {handleClick(e)}} alt="imgClicked"/>
  )
}

export default ClickablePicture 