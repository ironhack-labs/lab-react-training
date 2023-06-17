import React from "react";
import  {useState}  from "react";

function ClickablePicture (props) {

const [glasses, setGlasses] = useState(false)


    return(
        <>
        <button onClick={glasses ? setGlasses(false) : setGlasses(true)} > {glasses ? <img src={props.img} alt="sanslunettes"/>: <img src={props.imgClicked} alt="aveclunettes"/>}</button>
       </>
    )
}


export default ClickablePicture;