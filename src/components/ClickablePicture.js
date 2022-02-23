import {useState} from "react";

// Iteration 9: State: ClickablePicture
function ClickablePicture(props) {
    // const {img, imgClicked} = props
    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        setClicked((clicked) => !clicked)
    }

  return (
    <img onClick={clickHandler} src={clicked? props.imgClicked : props.img} alt="maxence" style={{ width: 300 }}/>
  );
}

export default ClickablePicture;
