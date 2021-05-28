import React, {useState} from 'react'

export default function ClickablePicture(props) {
    const [imagen, setImagen] = useState(false)
    return (
        <div className="container mt-5" onClick={() => setImagen(!imagen)} style={{cursor: 'pointer'}}>
            {
                imagen ? <img src={props.img} alt=""/>:<img src={props.imgClicked} alt=""/>
            }
        </div>
    )
}
