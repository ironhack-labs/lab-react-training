import React from 'react'
import './IdCard.css'



function IdCard(props) {

const { lastName, firstName, gender, height, birth, picture} = props

  return (
    <div>
         <div className="card" key={lastName}>
                <div className="picture">
                <img src={picture}/> 
            </div>
                <div className="information">
                <h1><b>First name:</b> {firstName}</h1> 
                <h1><b>Last name: </b>{lastName}</h1> 
                <h1><b>Gender: </b>{gender}</h1> 
                <h1><b>Height: </b>{height} cm</h1> 
                <h1><b>Birth date: </b>{birth.toLocaleString()}</h1> 
                </div>
             </div>
     

 </div>
  )
}

export default IdCard