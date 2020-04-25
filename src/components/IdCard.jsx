import React from 'react'
import './IdCard.css'

export default function IdCard(props) {

    const date = props.birth
    
    const dateArray = date.split("-");
    console.log(dateArray)
    var birthdate = '';
    birthdate = new Date(dateArray).toDateString();
    console.log("birthdate:", birthdate)

    return (
        <div className='idCard'>    
  
            <img src={props.picture} alt='test'></img>  
            <div>   
                <ul>
                    <li><strong>First Name :</strong>  {props.firstName}</li>
                    <li><strong>Last Name :</strong> {props.lastName}</li> 
                    <li><strong>Gender :</strong> {props.gender}</li>
                    <li><strong>Height :</strong> {props.height} m</li>
                    <li><strong>Birth :</strong>{birthdate}</li>
                </ul>       
            </div> 
        </div>
    )
}
