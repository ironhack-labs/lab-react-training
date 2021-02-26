import React from 'react';


function IdCard(props) {
    return (
        <div className='border border-dark m-2 d-flex p-1'>
            <img src={props.picture} alt='human portrait'/>
            <ul className='list-inline'>
                <li><strong>First name:</strong> {props.firstName}</li>
                <li><strong>Last name:</strong> {props.lastName}</li>
                <li><strong>Gender:</strong> {props.gender}</li>
                <li><strong>Height:</strong> {props.height}</li>
                <li><strong>Birth:</strong> {props.birth.toLocaleString()}</li>
            </ul>
        </div>

    )
}

export default IdCard;