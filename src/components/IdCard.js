

//function IdCard(props) {
//  return (
//    <div>

//        <p><strong>Last Name</strong>:{props.lastName}</p>
//        <p><strong>First Name</strong>:{props.firstName}</p>
//        <p><strong>Gender</strong>:{props.gender}</p>
//        <p><strong>Geight</strong>:{props.height}</p>
//        <p><strong>Birth</strong>:{props.birth.toDateString()}</p>
//        <img src={props.picture}/>
//    </div>
//  )
//}

//export default IdCard


import React from "react";

function IdCard(props) {
    const {person} = props

    return (

     <div className="ID">
      <img src = {person.picture} alt = "foto"/>
        <p>
          <b>First name:</b> {person.firstName}
        </p>
        <p>
          <b>Last name:</b> {person.lastName}
        </p>
        <p> <b>Gender:</b> {person.gender}</p>

        <p> Height: {person.height} </p>

        <p> Birth: {person.birth.toString()} </p>

      </div>
    );
  }

  export default IdCard;