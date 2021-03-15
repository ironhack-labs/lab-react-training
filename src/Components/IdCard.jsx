import React from "react";
import "../styles/IdCard.css";

const IdCard = (props) => {
    return (
        <div className="IdCard">
            <p>
                Name:  {props.lastName} <br />
                First name: {props.firstName} <br />
                gender: {props.gender} <br />
                height: {props.height} <br />
                birth: {new Date(props.birth).toDateString()} <br />
                <img src={props.picture} alt="" /> <br />
            </p>
        </div>);
};

export default IdCard;
