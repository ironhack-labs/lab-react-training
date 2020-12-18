import React from 'react';
import '../App.css';

export default function IdCard(props) {
    return (
        <div className="box">
            
            <img className="img-profile" src={props.picture} alt="profile pic" width="150px" height="150px" />

            <div className="id-card">
                <p>First name</p> {props.firstName} 
                <p>Last name</p> {props.lastName} 
                <p>Gender</p> {props.gender} 
                <p>Height</p> {props.height} cm
                <p>Birth</p> {props.birth.toDateString()} 
            </div>
            
        </div>
    );
}
