import { useState } from "react";



function ClickablePicture({ img, imgClicked }) {

    const [showGlasses, setShowGlasses] = useState(false)

    return (
        <figure>
            <h3>Ahora {showGlasses ? "sin" : "con"} gafas</h3>
            <img onClick={() => setShowGlasses(!showGlasses)} src={showGlasses ? img : imgClicked} />

        </figure>

    )
}

export default ClickablePicture;