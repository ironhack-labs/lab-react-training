import React from "react";

const IdCard = (props) => {
    return (
        <div className="IdCard box">
            <img src={props.picture} alt=""/>
            <div className="right">
                <strong>First name</strong>: {props.fisrtName} <br/>
                <strong>Last name</strong>: {props.lastName} <br/>
                <strong>Gender</strong>: {props.gender} <br/>
                <strong>Height</strong>: {props.hight} <br/>
                <strong>Birth</strong>: {props.birth.toDateString()} <br/>
            </div>
        </div>
    );
};

export default IdCard; 

