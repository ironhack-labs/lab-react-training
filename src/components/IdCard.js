import React from 'react';

function IdCard(props) {
    return (

        <div>

                <p>
                    <b>last name:</b> {props.lastName}
                </p>

                <p>
                    <b>first name:</b> {props.firstName}
                </p>

                <p>
                    <b>gender:</b> {props.gender}
                </p>

                <p>
                    <b>height:</b> {props.height / 100}m
                </p> 

{/*             
                <p>
                <b>birth:</b> {props.birth}
                </p> 
*/}

        </div>
    )
}

export default IdCard;


