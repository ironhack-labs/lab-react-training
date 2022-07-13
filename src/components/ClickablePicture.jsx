import React, { useState } from 'react';
import maxence from "../assets/images/maxence.png"
import maxenceClick from "../assets/images/maxence-glasses.png"

const ClickPic = () =>{
    const [pic, setPic] = useState(maxence);
    return(  
        <div>
            <img src={pic} alt="guy" onClick={(event)=> setPic((prevPic) => prevPic == maxence ? prevPic = maxenceClick : prevPic = maxence)}/>
        </div>
    )
}

export default ClickPic