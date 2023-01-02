import React from "react";


const Greetings =({lang, setMessage}) => {
    return(
        <div className="greetings">
            <h3> {lang}</h3>
         <button onClick={() => setMessage('Guten Tag Adolf')}>Button DE</button>
         <button onClick={() => setMessage('Bonjour Olivier')}>Button FR</button>
         <button onClick={() => setMessage('Hola Chica')}>Button ES</button>
         <button onClick={() => setMessage('Hello mr smeet')}>Button EN</button>

         
        </div>
    )
}

export default Greetings