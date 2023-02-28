import React from 'react'

function IdCard(props) {
  return (
    <div class = "card">
    <img class ="image1" src={props.image} alt = ""/>
    <div class = "text">
    <p>First Name: {props.firstName}</p> 
    <p>Last Name: {props.lastName}</p> 
    <p> Gender: {props.gender}</p> 
    <p> Height: {props.height}</p> 
    <p> Birth: {props.birth.toLocaleString()}</p> 
   </div>
  </div>
  );
}

export default IdCard