// import { useState } from 'react'
import profiles from '../../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
    return (
        profiles.map((elm, index) => {

            console.log('hhhhh', elm.img)

            return (
                <section className='personaje' key={index}>
                    <div>
                        <img src={elm.img} alt='' />
                    </div>
                    <div>
                        <h4>Firstname:{elm.firstName}</h4>
                        <h4>Lastname:{elm.lastName}</h4>
                        <h4>Country:{elm.country}</h4>
                        <h4>Type:{elm.isStudent === true ? "Student" : "Techear"}</h4>
                    </div>
                </section>


            )
        }
        )
    )

}

export default FaceBook
