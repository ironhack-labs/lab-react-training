import React from 'react';

function IdCard(props) {
  return (
    <div>
      <div>
        <img src={props.picture}></img>;
      </div>
      <div><b>First Name: </b>{props.lastName};</div>
      <div><b>First Name: </b>{props.firstName};</div>
      <div>{props.gender};</div>
      <div>{props.height};</div>
      <div>{props.birth.toString()};</div>
    </div>
  );
}

export default IdCard;

//         lastName="Doe"
//         firstName="John"
//         gender="male"
//         height={178}
//         birth={new Date('1992-07-14')}
//         picture="https://randomuser.me/api/portraits/men/44.jpg"
