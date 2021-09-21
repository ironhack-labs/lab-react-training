import React from 'react';

const IdCard = ({min,max}) => {
  return (
    <div>
     <div>
        Random Value between 1 and 6 <span>{min}</span>
      </div>

      <div>
        Random Value between 1 and 100 <span>{max}</span>
      </div>

     
    </div>
  );
};

export default IdCard;