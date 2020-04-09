import React from 'react'
import '../IdCard/IdCard.css'
//import { render } from 'react-dom';

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

function IdCard (props){
  const {lastName, firstName, gender, height, birth, picture} = props;
  return(
    <div className="card">  
        <div className="img">
          <img className="photo" src={picture} />
        </div>
        <div className="info">
          <p><strong>lastName=</strong>{lastName}</p>
          <p><strong>firstName=</strong>{firstName}</p>
          <p><strong>gender=</strong>{gender}</p>
          <p><strong>height=</strong>{height}</p>
          {/* <p><strong>birth=</strong>{new Date({birth})}</p> */}   
        </div>    
    </div>
  )
}


export default IdCard