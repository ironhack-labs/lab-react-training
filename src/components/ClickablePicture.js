import React from "react";
import  {useState}  from "react";

function ClickablePicture (props) {

const [glasses, setGlasses] = useState(false)

function changePic(){
    if(glasses){
        setGlasses(false)
    }
    else{setGlasses(true)}
}


    return(
        <>
        <button onClick={changePic}> {glasses ? <img src={props.img} alt="sanslunettes"/>: <img src={props.imgClicked} alt="aveclunettes"/>}</button>
       </>
    )
}


export default ClickablePicture;