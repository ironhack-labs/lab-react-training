import React from 'react';

const Random = ({
    min,
    max
  }) => {
    return (
     <div className="random-box">
        Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1)) + min}
     </div>
    );
};


export default Random;