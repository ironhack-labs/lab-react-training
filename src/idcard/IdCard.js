import React from 'react';
import "./IdCard.css"

const IdCard = ({lastName, firstName, gender, height, birth, picture}) =>{
    return (
        <div className='id-card'>
        <img src={picture} alt="" />
        <div className='personal-data'>
          <p><b>First Name</b> = {firstName}</p> 
          <p><b>Last Name</b> = {lastName}</p>  
          <p><b>Gender</b> = {gender}</p>  
          <p><b>Height</b> = {height} M</p>  
          <p><b>Birth</b> = {birth}</p>   
        </div>
        </div>
        
    )
}
export default IdCard;