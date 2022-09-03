import React from 'react'
import './IdCard.css';

const IdCard = (props) => {
  return (<>
    <div id="container-Card">
      <img alt={''} src={props.picture}></img>
      <div id='item-Card'>
        <p><b>First Name: </b>{props.firstName}</p>
        <p><b>Last Name: </b>{props.lastName}</p>
        <p><b>Gender: </b>{props.gender}</p>
        <p><b>Height: </b>{props.height}</p>
        <p><b>Birth: </b>{props.birth ? props.birth.toDateString() : new Date()}</p>
      </div>
    </div>


  
  </>)

}

export default IdCard



