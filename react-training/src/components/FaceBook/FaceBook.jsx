import { useState } from 'react';
import './FaceBook.css'
import profiles from './data/berlin.json';


const FaceBook = () => {
    let buttonList = []
    profiles.forEach(({ country }) => !buttonList.includes(country) && buttonList.push(country))

    const [countryState, setCountryState] = useState('All')
    const changeCountryBackground = (country) => {
        setCountryState(country)
    }
    return (
        <>
            <button onClick={() => changeCountryBackground('All')}>All</button>
            {
                buttonList.map((eachCountry) => {
                    return (
                        <button key={eachCountry} onClick={() => changeCountryBackground(eachCountry)}>{eachCountry}</button>
                    )
                })
            }
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }) => {
                    return (
                        <div key={lastName} className={`imgContainer ${countryState === country ? 'paintBackground' : 'noBackground'}`} >
                            <div>
                                <img src={img} alt="profile pic" />
                            </div>
                            <div className="facebookData">
                                <p><strong>First name: </strong>{firstName}</p>
                                <p><strong>Last name:</strong> {lastName}</p>
                                <p><strong>Gender:</strong> {country}</p>
                                <p><strong>Type: </strong>{`${isStudent ? 'Student' : 'Teacher'}`}</p>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default FaceBook