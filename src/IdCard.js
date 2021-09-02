import React from 'react';


export default function IdCard(props){

    
    return (
        <div class='divWrapper' className="idCard">
            <div>
                <img src={props.picture} alt="Id picture"/>
            </div>

            <div>
                <p>First name: {props.firstName} <br/>
                Last name: {props.lastName}<br/>
                Gender: {props.gender} <br/>
                Height: {props.height}<br/>
                Birth: {props.birth.toDateString()}</p> 
            </div>

        </div>
    )  
}