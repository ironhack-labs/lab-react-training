import React from 'react'
import PropTypes from 'prop-types';
import './components.css'




export default function IdCard(props){

    return ( 
        <div className = "id-card-container">
               
            <img src={props.picture}/>
            <div className = "Id-card-info">
                <p><strong>First name: </strong>{props.lastName}</p> 
                <p><strong>Last name: </strong>{props.firstName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth: </strong>{props.birth.toString()}</p> 
            </div>            


        </div>
    )
}


