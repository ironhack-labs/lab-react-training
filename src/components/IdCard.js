import React from 'react';

/* function IdCard ({firstName, lastName, gender, height, birth, picture}) {
    return (
        <div className="IdCard box">
            <div>
                <img  src={picture} alt={firstName}/>
            </div>
            <div>
                <p>
                    <span>First name:</span> {firstName}
                    <br/>
                    <span>Last name:</span> {lastName} 
                    <br/>
                    <span>Gender:</span> {gender}
                    <br/>
                    <span>Height:</span> {height}m
                    <br/>
                    <span>Birth:</span> {birth}
                    <br/>
                </p>
            </div>
        </div> 


    )
}
 */

function IdCard (props){
    return(
        
        <div className="card bio-card">

                <div>
                    <img  src={props.picture} alt={props.firstName}/>
                </div>

                <div>
                    <span>First name:</span> {props.firstName}
                    <br/>
                    <span>Last name:</span> {props.lastName} 
                    <br/>
                    <span>Gender:</span> {props.gender}
                    <br/>
                    <span>Height:</span> {props.height}m
                    <br/>
                    <span>Birth:</span> {props.birth}
                    <br/>
                </div>
        </div>
    )
}
export default IdCard