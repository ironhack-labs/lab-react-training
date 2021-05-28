import React, { useState } from 'react'

export const ClickablePicture = (props) => {
    
    const [imagen, setimagen] = useState(true)


    return (
        <div className="mt-5" onClick={()=>setimagen(!imagen)} style={{cursor:'pointer'}}>
            {
                imagen ? <img src={props.img} alt="" />: <img src={props.imgClicked} alt=""/>
            }
        </div>
    )
}