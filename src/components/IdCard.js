import React from 'react';


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