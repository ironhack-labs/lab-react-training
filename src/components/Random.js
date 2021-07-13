import React from 'react';

function Random (props){

    /* With this formula we can get one random number between two interger
    return Math.round(Math.random() * (max - min) + min);
 */

    const randomNumber = Math.floor(Math.random() * (props.max - props.min)) + props.min
    const figura = "=>";
    return(

        
        <div className="rand">

                <div>
                    <p>Random value between {props.min} and {props.max} {figura} {randomNumber}</p>
                </div>

        </div>
    )
}
export default Random
