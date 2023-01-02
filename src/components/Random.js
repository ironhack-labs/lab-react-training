import React from "react";


const Random =({min, max, randomNumber, setRandom}) => {
    const number = ''
    return(
        <div className="random">
             <h3> Random value between  {min} and  {max} => {randomNumber}</h3>
         
         <button onClick={() => setRandom(Math.floor(Math.random() * (max - min) + min))}> click random  </button>
         {/*<button onClick={() => setMessage('Hola Chica')}>Button ES</button>
         <button onClick={() => setMessage('Hello mr smeet')}>Button EN</button> */}

         
        </div>
    )
}

export default Random