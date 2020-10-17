import React, { Component } from 'react'

const IdCard = (props) => {
    return (
        <div className="card">
          <li>Last Name {props.lastName}</li>  
        <li>First Name {props.firstName}</li>    
    <li>Height {props.height}</li>  
     {/* <li>Birth {props.birth}</li>   */}
    <img src={props.picture}/>   
        </div>
    )
}

export default IdCard
