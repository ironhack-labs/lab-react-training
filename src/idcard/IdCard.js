import React from 'react';
import './IdCards.css'

function IdCard(props) {
    return (
        <div className='IdCard'>
            <div>

            <img alt={props.firstname} src={props.img}/>
            </div>
            <div>

            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Country: {props.country}</p>
            {/* <p isStudant={false}>Is studant: </p> */}
            </div>
            
        </div>
    );
}

export default IdCard