import { useState } from "react"

function ClickablePicture ({img, imgClicked}) {
    const [glasses, setGlasses] = useState(false)

    function putGlasses() {
        setGlasses(!glasses)
    }
    return (
        <div>
            
            <button className='glasses' onClick={putGlasses}>
            {glasses ? <img src={imgClicked} /> : <img src={img} />}
            </button>
        </div>
    )
}

export default ClickablePicture