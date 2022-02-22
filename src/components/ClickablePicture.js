import { useState } from 'react'
import './ClickablePicture.css'


const ClickablePicture = ({ img, imgClicked}) => {  
    let [image, setImage] = useState(img)

    const changeImage = () => {
        if (image === img){
            setImage(imgClicked)
        }else{
            setImage(img)

        }
    }
    return(
        <article className="likeBtn">
            <img src={image} onClick={changeImage}/>
      
        </article>

    )
    
}

export default ClickablePicture
