import React from 'react';

const formatDate = (d) => {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}/${month}/${year}`;
};

const Card = (props) => {
    const formattedBirth = formatDate(props.birth)

    return (
        <div className="IdCard box">
            <img src={props.picture} alt=""/>
            <div className="right">
                <strong>First name</strong>: {props.firstName} <br/>
                <strong>Last name</strong>: {props.lastName} <br/>
                <strong>Gender</strong>: {props.gender} <br/>
                <strong>Height</strong>: {props.height} <br/>
                <strong>Birth</strong>: {formattedBirth} <br/>
            </div>
        </div>
    );
};
    
export default Card;