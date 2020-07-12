import React, {useState} from 'react'

export default function ClickedImg() {

    const [click, setClick] = useState(0);

    const images = ['/img/persons/maxence.png','/img/persons/maxence-glasses.png']

    const putGlasses = () => {
        const newState = click + 1;
        newState > 1 ? setClick(0) : setClick(newState)
    }

    return (
        <div>
            <img src={images[click]} alt="" onClick={putGlasses}/>
        </div>
    )
}
