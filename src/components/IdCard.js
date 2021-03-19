import React from 'react';

import "../statics/css/IdCard.css";



const IdCard = (props) => {

    const generatePBlock = (field, value) => {

        return (
            <p><b>{field}</b> {value}</p>
        )
    }

    return (
        <div className="IdCard">
            <div ClassName="Image">
                <img src={props.picture} />
            </div>
            <div className="Data">
                {generatePBlock('First Name: ', props.firstName)}
                {generatePBlock('Last Name: ', props.lastName)}
                {generatePBlock('Gender: ', props.gender)}
                {generatePBlock('Height: ', props.height)}
                {generatePBlock('Birth: ', props.birth.toDateString())}

            </div>

        </div>



    )
}

export default IdCard;
