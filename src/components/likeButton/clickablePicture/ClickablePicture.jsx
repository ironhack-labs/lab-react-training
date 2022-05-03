import './ClickablePicture.css'
import { useState } from 'react'

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

function ClickablePicture({ img, imgClicked }) {

    const [glassesOn, toggleGlasses] = useState(false)



    return (
        <div><button onClick={() => toggleGlasses((glassesOn) => !glassesOn)}>
            <img src={!glassesOn ? img : imgClicked} alt="" class="inner-image" />
        </button>

        </div>
    )

}


export default ClickablePicture