import React from 'react'


export default function IdCard({ lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="idCard">
<img className="idPicture" alt= "idPic" src={picture}/>
<div className="idText">
<h3>Last Name:{lastName}</h3>
<h3>First Name:{firstName}</h3>
<h3>Gender:{gender}</h3>
<h3>Height:{height}</h3>
<h3>Birth:{birth.toDateString()}</h3> 
</div>
    </div>
  )
}

//dont forget to toDateString()!!