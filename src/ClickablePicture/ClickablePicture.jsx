import { useState } from 'react'


function ClickablePicture({ img, imgClicked}) {

    const [toggled, setToggled] = useState(true)

    const toggleImage = () => setToggled(!toggled)

    return (
        <div>
            <button onClick={toggleImage}><img src={toggled? img : imgClicked}></img>
            </button>
        </div>
    );
}

export default ClickablePicture;


