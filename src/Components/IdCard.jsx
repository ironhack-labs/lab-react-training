import React from 'react'

const IdCard = (props) => {
    function heightInMeter(heightUser) {
        return `${heightUser / 100}m`
    }
    return (
        <div style={{
            display:"flex"
            }}>
            <div>
                <img src={props.picture} alt="" />
            </div>

            <div className="description">
                <p>First name:{props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {heightInMeter(props.height)}</p>
                <p>Birth: {props.birth.toString()}</p>
            </div>


        </div>
    );
};

export default IdCard;
