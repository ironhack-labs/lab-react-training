import React from "react"
import "./index.css"

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    const renderData = (name, value) => {
        return (
            <p>
                <strong>{name}: </strong>
                {value}
            </p>
        );
    };
    return (
        <div className="IdCard">
            <img src={picture} alt={firstName} />
            <div>
                {renderData('First Name', firstName)}
                {renderData('Last Name', lastName)}
                {renderData('Gender', gender)}
                {renderData('Height', height / 100)}
                {renderData('Birth', birth.toDateString())}
            </div>
        </div>
    );
}

export default IdCard




/*function IdCard(props) {
    return (
        <div>
            <p><strong> Last Name </strong>: {props.lastName} </p>
            <p> <strong> First Name</strong> : {props.firstName} </p>
            <p> <strong> Gender</strong> : {props.gender} </p>
            <p> <strong> Height</strong> : {props.height} </p>
            <p> <strong> Birth </strong> : {props.birth.toDateString()} </p>
            <img src={props.picture} />

        </div>
    );
}*/
