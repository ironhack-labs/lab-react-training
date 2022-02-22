import React from "react"
import max from "../assets/images/maxence.png"
import maxGlasses from "../assets/images/maxence-glasses.png"


const ClickablePicture = props => {
    // const max = require("../assets/images/maxence.png")

    const [glasses, setGlasses] = React.useState(false)
    
    return (
        <div>
            <img onClick={()=>setGlasses(!glasses)} src={glasses ? maxGlasses : max} alt="maxmaybeglasses" />
        </div>
    ) 
}

export default ClickablePicture