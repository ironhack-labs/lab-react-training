import { useState } from 'react'
const ClickablePicture = (props) => {
    const [picture, setPicture] = useState(props.img)

    const newPicture = () => {
        if (picture === props.img) {
            setPicture(props.gafas)
        } else {
            setPicture(props.img)
        }
    }
    return (
        <div>
            <img onClick={() => newPicture()} src={picture} alt="" />

        </div>

    )

}

export default ClickablePicture