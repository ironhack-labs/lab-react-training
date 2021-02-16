import React, { useState } from 'react';
// u.u
const styles = {
    width : 200,
    height: 200
}
function ClickablePicture({img,imgClicked}){
    const [image, setImage] = useState(img)

    const changeImg = () => {
            if(image === img){
                setImage(imgClicked)
            }
            else{
               setImage(img)
            }
    }

    return(
        <div>
            <img style={styles} alt="guy" src={image} onClick={changeImg} />
        </div>
    )
}



export default ClickablePicture