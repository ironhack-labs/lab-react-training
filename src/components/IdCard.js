import React from 'react'

const idCard = ({lastName, firstName, gender, height, birth, picture}) => {

return (
     
     <div className="id.cards">
     <div className="id-picture">
          <img src={picture} alt="user photo"/>
     </div>

     <div className="id-infos">
     <p><strong>First Name:</strong> {firstName} </p>
     <p><strong>Last Name:</strong> {lastName} </p>
     <p><strong>Gender:</strong> {gender} </p>
     <p><strong>Height:</strong> {height /100}m </p>
     <p><strong>Birth:</strong> {birth.toDateString()} </p>
     </div>
     </div>
)

}

export default idCard;