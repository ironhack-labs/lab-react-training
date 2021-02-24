import React, {useState} from 'react'



export default function ClickablePicture(props) {

    const [image, setImage] = useState(props.img)

    function changeImg() {
        if(image===props.img){
            setImage(props.imgClicked)
        } else {
            setImage(props.img)

        }
       
    }

    return (
        <div>

            <img onClick={()=>changeImg()} 
            src={image}/>
        </div>
    )
}
