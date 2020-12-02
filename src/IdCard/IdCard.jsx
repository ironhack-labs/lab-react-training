import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
    return (
        <div className='id-card'>
            <img src={props.picture} alt={props.firstName}/>
            <div className='text'>
                <p> <b> First name </b>: {props.firstName} </p>
                <p> <b> Last name </b>: {props.lastName} </p>
                <p> <b> Gender </b>: {props.gender} </p>
                <p> <b> Height </b>: {props.height/100}m </p>
                <p> <b> Birth </b>: {props.birth.toString().slice(0,15)} </p>
            </div>
           
        </div>
    )
}

export default IdCard

