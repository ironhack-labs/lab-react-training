import React from 'react'
import './GeneralCSS.css'

export default function IdCard(props) {
    const dateString = Date(props.birth).toString().slice(0,15);    
    return (
        <div className='container'>
            <div className='imageContainer'>
                <img src={props.picture} alt='profile pic'/>
            </div>
            <div className='descriptionContainer'>
                <p><b>First Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Birth:</b> {dateString}</p>
            </div>
        </div>
    )
}
