import { useState } from 'react'


function ClickablePicture({ img, imgClicked }) {

    const [newImg, setnewImg] = useState(img)

    const changeImg = () => {

        if (newImg === img) {
            setnewImg(imgClicked)
        } else {
            setnewImg(img)
        }
    }

    return (
        <button onClick={changeImg}>
            <img src={newImg} alt=''></img>
        </button>
    )
}


export default ClickablePicture
