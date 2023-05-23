import { useState } from 'react'
import profiles from '../../data/berlin.json'
import './../IdCard.css'
import './FaceBook.css'

const FaceBook = () => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const countries = ['England', 'USA', 'Malaysia', 'Germany', 'Sweden', 'Nigeria', 'Italy', 'Scotland', 'Kazakhstan', 'Russia', 'Catalonia', 'France', 'Israel', 'Brazil', 'Taiwan', 'Turkey', 'Norway']

    const highlighted = (personsCountry) => {
        return personsCountry === selectedCountry ? 'highlight' : null
    }

    return (

        <div>
            {countries.map(country =>
                <button className={highlighted(country)} onClick={() => setSelectedCountry(country)}> {country} </button>
            )}

            {profiles.map((person, index) => {
                return (
                    <div key={index} className={`idCard ${highlighted(person.country)}`}>
                        <img src={person.img} alt="Profile" />
                        <div>
                            <p><strong>First Name: </strong>{person.firstName}</p>
                            <p><strong>Last Name: </strong>{person.lastName}</p>
                            <p><strong>Country: </strong>{person.country}</p>
                            <p><strong>Type: </strong>{person.isStudent ? 'Student' : 'Teacher'}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook