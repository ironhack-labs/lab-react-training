import React, {useState} from 'react'

export default function ClickablePicture(data) {

    const [image, setImgage] = useState(data.img)

    function changeImg() {
        if(image === data.img) {
            setImgage(data.imgClicked)
        } else {
            setImgage(data.img)
        }
    }

    return (
        <div>
            <img onClick = {() => changeImg()} src={image} />
        </div>
    )
}
