import './FaceBook.css'
import { useState } from 'react'
import profiles from '../data/berlin.json';

const FaceBook = ({ images }) => {




    const newArr = profiles.map((elm, index, profiles) => {

        return elm.country;

    });


    const countries = newArr.filter((item, index) => {
        return newArr.indexOf(item) === index;
    })


    return (
        <section className="list">
            {
                countries.map((elm, id) => {
                    return (
                        <button key={id} >{elm}</button>
                    )

                })
            }

            {
                profiles.map((elm, idx) => {
                    return (<div className='ficha'>
                        <img src={elm.img} className='face' />
                        <div className='texts' key={idx}>
                            <p><strong>FirstName</strong> {elm.firstName}</p>
                            <p><strong>Name</strong> {elm.lastName}</p>
                            <p><strong>Country</strong> {elm.country}</p>
                            <p><strong>Type</strong> {elm.isStudent ? 'Teacher' : 'Student'}</p>
                        </div>
                    </div>)
                })
            }

        </section>
    )
}

export default FaceBook

//{"firstName": "Thor", "lastName": "Flesjo", "country": "Norway", "img": "https://i.imgur.com/O5x4RPrb.jpg", "isStudent": false}