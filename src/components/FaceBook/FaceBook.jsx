import { useState } from 'react';
import './FaceBook.css'
import profiles from './../../data/berlin.json';

const FaceBook = () => {
    const [country, setCountry] = useState('');

    let countryArr = []
    profiles.forEach(elm => {
        countryArr.push(elm.country)
    })
    const uniqueCountryArr = [...new Set(countryArr)]
    const addBackground = countryId => {
        setCountry(countryId)
    }

    return (
        <div>
            {
                uniqueCountryArr.map(elm => {
                    return (
                        <button key={elm} onClick={() => addBackground(elm)}>{elm}</button>
                    )
                })
            }
            {
                profiles.map(elm => {
                    return (
                        <div key={elm.firstName}
                            className="FacebookCard"
                            style={elm.country == country ? { backgroundColor: "blue" } : { backgroundColor: "white" }}>
                            <div>
                                <img src={elm.img} alt={elm.firstName} />
                            </div>
                            <div>
                                <p><strong>FirstName:</strong> {elm.firstName}</p>
                                <p><strong>LastName:</strong> {elm.lastName}</p>
                                <p><strong>Country: </strong> {elm.country}</p>
                                {elm.isStudent ? <p><strong>Type: </strong> Student</p> : <p><strong>Type: </strong> Teacher</p>}
                            </div>
                        </div>

                    )

                })
            }

        </div>

    )
}

export default FaceBook
