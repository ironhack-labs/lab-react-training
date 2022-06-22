import React from 'react';
import berlin from './berlin.json';

const IdCard = (props) => {
  console.log('berlin last name', berlin[0].lastName);
  console.log('props', props);
  return (
    <div>
      lastName={berlin.lastName}
      firstName={props.firstName}
      gender={props.gender}
      height={props.height}
      birth={new Date('1992-07-14')}
      picture={props.img}
    </div>
  );
};

export default IdCard;
