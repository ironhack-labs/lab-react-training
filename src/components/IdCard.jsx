import React from 'react';

const idCard = (props) => {
  console.log(props);
  return (
    <div>
      {props.lastName} {props.firstName} {props.gender}
    </div>
    //   <p>{props.firstName}</p>;
    //  <p>{ props.gender}</p>
  );
};

export default idCard;
