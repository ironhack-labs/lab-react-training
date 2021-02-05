import React from 'react';
import './IdCard.css';

function IdCard(props) {
    function convertDate(date){
        let birth = new Date(date);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return birth.toDateString(undefined, options);
}

    return (
    <div className="box" >
        <img src={props.picture} alt="profile" />
        <div className="box-text">
            <p><strong>First name:</strong> {props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height / 100}m</p>
            <p><strong>Birth:</strong> {convertDate(props.birth)}</p>
        </div>
    </div>
    );
  };

  export default IdCard;