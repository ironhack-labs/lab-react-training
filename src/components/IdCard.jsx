import React from "react";

function IdCard(props) {
  return (
    <div className="id-card" style={{display:"flex", border:"1px solid black", padding: "5px", margin:"10 px 0"}}>
      <div><img src={props.picture} alt="" /></div>

      <div>
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Height: {props.height}</h3>
        <h3>D.O.B: {props.birth}</h3>
      </div>
    </div>
  )
}
  



export default IdCard;