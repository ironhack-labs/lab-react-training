import React from 'react'

export default function Random( {min, max} )  {
 
    const randomNumber= Math.floor(Math.random()* (max-min)) + min

    return (
    <div className="randomNum">
       <p>Random value between : {min} and {max}: {randomNumber}</p>
    </div>
  );
}
