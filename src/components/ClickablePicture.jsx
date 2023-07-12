import { useState } from "react"
function ClickablePicture(props){
    const [picture, setPicture] = useState(props.img)
    const switchPictures = ()=> picture === props.img ? props.imgClicked : props.img
    return (
        <div className="card" style={{ width: "70px" }}>
            <img onClick={()=>{setPicture(switchPictures)}} src={picture}/>

        </div>
    )
}

export default ClickablePicture