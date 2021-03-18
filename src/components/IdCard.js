import React from 'react'
import '../assets/css/IdCard.css'




const IdCard =({lastName,firstName,gender,height,birth,picture})=>{
   
    return(
      <div className="IdCard">
            <img src={ picture }></img>
            <div className="Data">
                <p><strong>First name</strong>: { firstName }</p>
                <p><strong>Last name</strong>: { lastName }</p>
                <p><strong>Gender</strong>: { gender }</p>
                <p><strong>Height</strong>: { height }</p>
                <p><strong>Birth</strong>: { birth }</p>
            </div>
        </div>
    )
}

export default IdCard