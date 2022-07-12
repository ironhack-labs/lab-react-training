import React from "react"; 
import "../components/css/IdCard.css"


const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <article className="IDcard">
            <div>
                <img src={picture} alt="" />
            </div>

            <div>
                <p className="lastName">{lastName}</p>
                <p className="firstName">{firstName}</p>
                <p className="gender">{gender}</p>
                <p className="height">{height}</p>
                <p className="birth">{birth}</p>
            </div>
        </article>
    )
};

export default IdCard;