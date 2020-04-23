import React from 'react'
import '../IdCard/IdCard.css'
//import { render } from 'react-dom';

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// picture: A string

function IdCard (props){
  const {lastName, firstName, gender, height, picture} = props;
  return(
    <div className="card">  
        <div className="img">
          <img className="photo" src={picture} alt="IMG-Conductor"/>
        </div>
        <div className="info">
          <p><strong>lastName=</strong>{lastName}</p>
          <p><strong>firstName=</strong>{firstName}</p>
          <p><strong>gender=</strong>{gender}</p>
          <p><strong>height=</strong>{height}</p>
        </div>    
    </div>
  )
}


export default IdCard