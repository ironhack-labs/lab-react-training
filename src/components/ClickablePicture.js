import { useState } from "react";

const ClickablePicture = (props) => {
    const [pic,setPic] = useState(props.img);
    console.log(pic)

    return (
        <img src={pic} onClick={() => setPic(props.imgClicked)} alt='glassPic' />
    );
  };
  
  export default ClickablePicture;