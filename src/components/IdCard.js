import React from 'react'
import index from './index.css'

 const IdCard = props => {
    return (
        <div>
            <p className='border-class  '>
                <h3>First Name: {props.firstName}</h3>
                <h3>Last Name: {props.lastName}</h3>
                <h3>Gender: {props.gender}</h3>
                <h3>Height: {props.height}</h3>
                <h3>Birth: {props.birth.toDateString()}</h3>
                <img src={props.picture} alt=""/>

            </p>
            
        </div>
    )
}

export default IdCard


