import React from 'react'
import '../App.css';
import Greetings from './Greetings';

const IdCard =({lastName, firstName, gender, height, birth, picture}) => {
    return(
        <>
            <div className='card'>
                <img src={picture} className='imgCard'/>

                <div className='textCard'>
                    <h2> 
                    Last Name: <span className='span'>{lastName}</span></h2>
                    <h2>
                    First Name: <span className='span'>{firstName}</span></h2>   
                    <h2>
                    Gender: <span className='span'>{gender}</span></h2> 
                    <h2>
                    Height: <span className='span'>{height}</span></h2>
                    <h2>
                    Birth: <span className='span'>{birth.toDateString()}</span></h2>

                </div>
            </div>

        </>
    )
}

export default IdCard

//utiliser la date - avec method - à la valeur de cet objet = 
//slack général - - - Yacine Hamdada   17:40