import React, {useState} from 'react'

function ClickablePicture(props) {

    // In order to toggle the image, we use a state for the image url, depending on the state, it's one image or another
    const [img, setImg] = useState(props.img)

    function toggleImg(){
        if (img == props.img){
            setImg(props.imgClicked);
        }else{
            setImg(props.img);
        }
    }

    return (
        <div>
            <button onClick={toggleImg}><img src={img} alt="" /></button>
        </div>
    )
}

export default ClickablePicture
