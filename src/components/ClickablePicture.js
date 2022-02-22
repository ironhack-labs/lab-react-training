import { useState } from "react";

const ClickablePicture = props => {

   const {img,imgClicked} = props

    const [clicked, setClick] = useState(false)

      let source
    if(clicked){
        source = img
    }else{
        source = imgClicked
    }

    return (
       <img src={source}  onClick={() => setClick((state) => !state)}/>        
    )
       
}

export default ClickablePicture