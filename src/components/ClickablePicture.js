import React, {useState} from 'react'

export default function ClickablePicture(data) {
    const [image, setImage] = useState(data.img)
    
    function changeImg(){
        if(image === data.img){
            setImage(data.imgClicked)
        }else{
            setImage(data.img)
        }
    }

    return (
        <div>
        <img onClick={()=>changeImg()} src={image}/>
        </div>
    )
}
