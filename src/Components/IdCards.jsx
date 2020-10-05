import React from 'react'

const IdCard = (props) => {

    return <div className="IdCard">
    <p>lastName={props.lastName}</p>
    <p>firstName={props.firstName}</p>
    <p>gender={props.gender}</p>
    <p>height={props.height}</p>
    <p>birth={props.birth.toString()}</p>
    <img src={props.picture} alt=""/>
    </div>;
}
  export default IdCard;
  