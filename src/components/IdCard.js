// import React from 'react';
// Iteration 1 | Component: IdCard
function IdCard(props) {
    // const {firstName, lastName, gender, height, birth, picture} = props
  return (
    <div className='id-card'>
        <div className="id-card-img">
          <img src={props.picture} alt="Profile of {props.lastName}" style={{ width: '200px' }}/>
        </div>
        <div className="id-card-info">
            <p><strong>First name: </strong>{props.firstName}</p>
            <p><strong>Last name: </strong>{props.lastName}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Height: </strong>{props.height}</p>
            <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
        </div>
    </div>
  );
}

export default IdCard;
