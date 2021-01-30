import React, { useState } from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {

    const [clicked, setClicked] = useState('')

    function setClickedCountry(country) {

        let clickedTemp = '';

        if(clicked === country) {
            clickedTemp = '';
        } else {
            clickedTemp = country;
        }

        setClicked(clickedTemp);

    }

    function getCountries(allProfiles)  {

        const countries = allProfiles.map(obj => {
            return obj.country;
        });

        return countries.filter((item, index) => countries.indexOf(item) === index);

    }
    
    const countriesList = getCountries(profiles);

    const countries = countriesList.map(element => {
        if (clicked === element) {
            return <button className='blueBack' onClick={e => setClickedCountry(element)}>{element}</button>
        } else {
            return <button onClick={e => setClickedCountry(element)}>{element}</button>
        }
    })

    const users = profiles.map(obj => {
        if (clicked === obj.country) {
            return (
                <div className='cardCont blueBack'>
                    <img src={obj.img}/>
                    <p><strong>First name:</strong> {obj.firstName}</p>
                    <p><strong>Last name:</strong> {obj.lastName}</p>
                    <p><strong>Country:</strong> {obj.country}</p>
                    <p><strong>Type:</strong> {(obj.isStudent) ? 'Student' : 'Teacher'}</p>
                </div>
            )
        } else {
            return (
                <div className='cardCont'>
                    <img src={obj.img}/>
                    <p><strong>First name:</strong> {obj.firstName}</p>
                    <p><strong>Last name:</strong> {obj.lastName}</p>
                    <p><strong>Country:</strong> {obj.country}</p>
                    <p><strong>Type:</strong> {(obj.isStudent) ? 'Student' : 'Teacher'}</p>
                </div>
            )
        }
    })

    return (
        <div className='facebookCont'>
            <div className='countries'>
                {countries}
            </div>
            <div className='users'>
                {users}
            </div>
        </div>
    )

}