import React from 'react'
import './IdCard.css'


function IdCard(props) {
    return (
        <>
            <div className='container'>
                <div>
                    <img src={props.picture} />
                </div>
                <div>
                    <p><b>First Name:</b>
                        {props.firstName}</p>
                    <p><b>Last Name:</b>{props.lastName}</p>
                    <p><b>Gender:</b>
                        {props.gender}</p>
                    <p><b>Height: </b>
                        {props.height}</p>
                    <p><b>First Name: </b>
                        {props.lastName}</p>
                    <p><b>Bitrh: </b>{props.birth}</p>
                </div>
            </div>
        </>
    );
}

export default IdCard;