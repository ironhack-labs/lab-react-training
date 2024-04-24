import React, { useState } from 'react';
import './Facebook.css';
import berlinData from '../../data/berlin.json';

function Facebook() {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const changeBackground = (country) => {
        if (selectedCountries.includes(country)) {
            setSelectedCountries(selectedCountries.filter((c) => c !== country));
        } else {
            setSelectedCountries([...selectedCountries, country]);
        }
    };

    return (
        <div>
            <div className='countries'>
                <button onClick={() => changeBackground('England')}>England</button>
                <button onClick={() => changeBackground('USA')}>USA</button>
                <button onClick={() => changeBackground('Malaysia')}>Malaysia</button>
                <button onClick={() => changeBackground('Germany')}>Germany</button>
            </div>
            {berlinData.map((user, index) => (
                <div className='Facebook' key={index} style={{ backgroundColor: selectedCountries.includes(user.country) ? 'rgb(160, 207, 255)' : 'white' }}>
                    <img src={user.img} alt={`${user.lastName}`}></img>
                    <div className='FacebookCardInfo'>
                        <div>
                            <b>First name: </b>
                            {user.firstName}
                        </div>
                        <div>
                            <b>Last name: </b>
                            {user.lastName}
                        </div>
                        <div>
                            <b>Country: </b>
                            {user.country}
                        </div>
                        <div>
                            <b>Type: </b>
                            {user.isStudent ? 'Student' : 'Teacher'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Facebook;



