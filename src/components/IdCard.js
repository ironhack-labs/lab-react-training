import React from 'react';
import './components.css';
import './IdCard.css';

const IdCard = (props) => {
    const {firstName, lastName, country, type, picture} = props;
    const imgStyle = {
        height: "150px",
        width: "150px"
    }

    return (
        <div className="id-card box">
            <img style={imgStyle} src={picture} alt={`${firstName} ${lastName}`}/>
            <div className="person-info">
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Country: </strong>{country}</p>
                <p><strong>Type: </strong>{type ? "Student" : "Teacher"}</p>
            </div>
        </div>
    )
}

export default IdCard;
