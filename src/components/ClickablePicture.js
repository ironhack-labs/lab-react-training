import React, {useState} from 'react'

function ClickablePicture(props) {

    const [getPic,setPic] = useState(false)


    return (
        <div>
            {ClickablePicture && !getPic && <img src={props.img} alt="click"/>}
            {ClickablePicture && getPic && <img src={props.imgClicked} alt="click"/>}
            <br/>
            <button onClick={() => setPic(!getPic)} >Click</button>
        </div>
    )
}

export default ClickablePicture


