import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = (props) => {
    const { img, imgClicled } = props

    const [imagen, setImagen] = useState(true)


    const changeImage = () => { setImagen(!imagen) }

    return (
        <div >
            <img src={imagen ? img : imgClicled} alt="imagen" onClick={changeImage} />
        </div>
    )
}

export default ClickablePicture